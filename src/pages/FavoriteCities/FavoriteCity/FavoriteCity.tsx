import { useQuery } from '@tanstack/react-query';

import { Box, Typography } from '@mui/material';

import { fetchWeather } from '@api';
import { WeatherStateIcon } from '@components';
import FavoriteBtn from '@components/FavoriteBtn/FavoriteBtn';
import { formatWeatherData } from '@helpers';

import { styles } from './styles';

interface IFavoriteCityProps {
  city: string;
  isFavorite: boolean;
  toggleFavorite: () => void;
}

function FavoriteCity({
  city,
  isFavorite,
  toggleFavorite,
}: IFavoriteCityProps) {
  const { data, isSuccess } = useQuery({
    queryKey: ['fetchWeather', city],
    queryFn: () => fetchWeather(city),
  });

  let formattedData;

  if (isSuccess) formattedData = formatWeatherData(data);

  return (
    <Box sx={styles.box}>
      <Typography sx={styles.cityName}>{city}</Typography>
      <Typography>{formattedData?.temp}</Typography>
      {formattedData && (
        <Box sx={styles.stateIcon}>
          <WeatherStateIcon state={formattedData.state} />
        </Box>
      )}
      <FavoriteBtn {...{ isFavorite, toggleFavorite }} />
    </Box>
  );
}

export default FavoriteCity;
