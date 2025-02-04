import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { Box, Skeleton, Stack, Typography } from '@mui/material';

import { fetchWeather } from '@api';
import {
  BackgroundImageByWeather,
  FavoriteBtn,
  WeatherStateIcon,
  Wind,
} from '@components';
import type { WindStyles } from '@components';
import { formatWeatherData } from '@helpers';
import { useStore } from '@store';

import { styles } from './styles';

interface ICurrentWeatherProps {
  city: string;
}

function CurrentWeather({ city }: ICurrentWeatherProps) {
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

  const windStyles: WindStyles = {
    variant: 'h5',
  };

  return (
    <Box sx={styles.box}>
      <Typography sx={styles.text} variant="h4">
        {city}
      </Typography>
      <Box sx={styles.favoriteBtn}>
        <FavoriteBtn {...{ isFavorite, toggleFavorite: toggleFavoriteCity }} />
      </Box>
      {isPending && (
        <Stack spacing={1}>
          <Skeleton height={30} variant="rounded" width={70} />
          <Skeleton height={30} variant="rounded" width={70} />
          <Skeleton height={30} variant="rounded" width={70} />
        </Stack>
      )}
      {isSuccess && formattedData && (
        <>
          <BackgroundImageByWeather state={formattedData.state} />
          <Typography sx={styles.text} variant="h5">
            {formattedData.temp}
          </Typography>
          <Typography sx={styles.text} variant="h5">
            {formattedData.humidity}
          </Typography>
          <Wind
            {...{
              deg: formattedData.deg,
              speed: formattedData.speed,
              styles: windStyles,
            }}
          />
          <Box sx={styles.stateIcon}>
            <WeatherStateIcon state={formattedData.state} />
          </Box>
        </>
      )}
    </Box>
  );
}

export default CurrentWeather;
