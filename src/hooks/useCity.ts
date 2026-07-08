import { useParams } from 'react-router';

import { useGeocodingToCity } from '@react-queries';

import { useGeolocationCoords } from './useGeolocationCoords';

type IuseCityReturn = undefined | { name: string };

function useCity(): IuseCityReturn {
  const { city: cityFromURL } = useParams();

  const { coords, isDone } = useGeolocationCoords();

  const { data } = useGeocodingToCity(coords);

  if (cityFromURL) {
    return { name: cityFromURL };
  }

  if (data) {
    return { name: data[0].name };
  }

  if (isDone && !coords) {
    return { name: 'Kyiv' };
  }
}

export { useCity };
