import { useEffect } from 'react';

import { NoCity } from '@components/NoCity';
import { formatWeatherData } from '@helpers';
import { useWeather } from '@react-queries';
import { useStore } from '@store';

import { CurrentWeatherData } from './components/CurrentWeatherData';
import { CurrentWeatherLayout } from './components/CurrentWeatherLayout';
import { CurrentWeatherSkeleton } from './components/CurrentWeatherSkeleton';

interface Props {
  city: string;
}

function CurrentWeatherContainer({ city }: Props) {
  const { addSearchedCity, favoriteCities, toggleFavorite } = useStore();

  const { data, isError, isPending, isSuccess } = useWeather(city);

  useEffect(() => {
    if (isSuccess) {
      addSearchedCity(data.name);
    }
  }, [city, isSuccess, addSearchedCity, data?.name]);

  let formattedData;

  if (data) {
    formattedData = formatWeatherData(data);
  }

  const isFavorite = favoriteCities.includes(data?.name ?? city);
  const toggleFavoriteCity = () => {
    toggleFavorite(data?.name ?? city);
  };
  const favorite = {
    isFavorite,
    toggleFavorite: toggleFavoriteCity,
  };

  return (
    <>
      {isError && <NoCity />}
      {!isError && (
        <CurrentWeatherLayout {...{ city: data?.name ?? '', favorite }}>
          {isPending && <CurrentWeatherSkeleton />}
          {isSuccess && formattedData && (
            <CurrentWeatherData data={formattedData} />
          )}
        </CurrentWeatherLayout>
      )}
    </>
  );
}

export { CurrentWeatherContainer };
