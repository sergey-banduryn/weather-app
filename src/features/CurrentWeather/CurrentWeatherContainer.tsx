import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { fetchWeather } from '@api';
import { formatWeatherData } from '@helpers';
import { useStore } from '@store';

import { CurrentWeatherData } from './components/CurrentWeatherData';
import { CurrentWeatherLayout } from './components/CurrentWeatherLayout';
import { CurrentWeatherSkeleton } from './components/CurrentWeatherSkeleton';

interface Props {
  city: string;
}

function CurrentWeatherContainer({ city }: Props) {
  const { addSearchedCity, favoriteCities, toggleFavorite } = useStore();

  const { data, error, isError, isPending, isSuccess } = useQuery({
    queryFn: () => fetchWeather(city),
    queryKey: ['fetchWeather', city],
  });

  useEffect(() => {
    if (isSuccess) {
      addSearchedCity(data.name);
    }
  }, [city, isSuccess, addSearchedCity, data?.name]);

  useEffect(() => {
    if (isError) toast(error.message);
  }, [isError, error]);

  let formattedData;
  if (data) formattedData = formatWeatherData(data);

  const isFavorite = favoriteCities.includes(city);
  const toggleFavoriteCity = () => {
    toggleFavorite(city);
  };
  const favorite = {
    isFavorite,
    toggleFavorite: toggleFavoriteCity,
  };

  return (
    <CurrentWeatherLayout {...{ city, favorite }}>
      {isPending && <CurrentWeatherSkeleton />}
      {isSuccess && formattedData && (
        <CurrentWeatherData data={formattedData} />
      )}
    </CurrentWeatherLayout>
  );
}

export { CurrentWeatherContainer };
