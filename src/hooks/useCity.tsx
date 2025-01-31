import { skipToken, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { fetchGeocodingToCity } from '@api';

import useGeolocationCoords from './useGeolocationCoords';

type IuseCityReturn = { name: string } | undefined;

function useCity(): IuseCityReturn {
  const { city: cityFromURL } = useParams();

  const { coords, isDone } = useGeolocationCoords();

  const { data } = useQuery({
    queryKey: ['fetchGeocodingToCity', coords?.latitude, coords?.longitude],
    queryFn: coords ? () => fetchGeocodingToCity(coords) : skipToken,
  });
  if (cityFromURL) return { name: cityFromURL };

  if (data) return { name: data[0].name };

  if (isDone && !coords) return { name: 'Kyiv' };
}

export default useCity;
