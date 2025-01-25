import FavoriteBtn from '@components/FavoriteBtn/FavoriteBtn';
import { Box, Skeleton, Stack, Typography } from '@mui/material';
import { styles } from './styles';
import { formatWeatherData } from '@helpers';
import { fetchWeather } from '@api';
import { useStore } from '@store';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { WeatherStateIcon } from '@components';
import BackgroundImageByWeather from '@components/BackgroundImageByWeather';
import NorthIcon from '@mui/icons-material/North';

interface ICurrentWeatherProps {
  city: string;
}

function CurrentWeather({ city }: ICurrentWeatherProps) {
  const { addSearchedCity, favoriteCities, toggleFavorite } = useStore();

  const { isPending, isError, isSuccess, data, error } = useQuery({
    queryKey: ['fetchWeather', city],
    queryFn: () => fetchWeather(city),
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

  return (
    <Box sx={styles.box}>
      <Typography variant="h4" sx={styles.text}>
        {city}
      </Typography>
      <Box sx={styles.favoriteBtn}>
        <FavoriteBtn {...{ isFavorite, toggleFavorite: toggleFavoriteCity }} />
      </Box>
      {isPending && (
        <Stack spacing={1}>
          <Skeleton variant="rounded" width={70} height={30} />
          <Skeleton variant="rounded" width={70} height={30} />
          <Skeleton variant="rounded" width={70} height={30} />
        </Stack>
      )}
      {isSuccess && formattedData && (
        <>
          <BackgroundImageByWeather state={formattedData.state} />
          <Typography variant="h5" sx={styles.text}>
            {formattedData.temp}
          </Typography>
          <Typography variant="h5" sx={styles.text}>
            {formattedData.humidity}
          </Typography>
          <Box sx={styles.wind}>
            <Box
              sx={[
                styles.arrowWrap,
                { rotate: `${String(formattedData.deg)}deg` },
              ]}
            >
              <NorthIcon sx={styles.arrow} />
            </Box>
            <Typography variant="h5" sx={styles.text}>
              {formattedData.speed}
            </Typography>
          </Box>
          <Box sx={styles.stateIcon}>
            <WeatherStateIcon state={formattedData.state} />
          </Box>
        </>
      )}
    </Box>
  );
}

export default CurrentWeather;
