import { useQuery } from '@tanstack/react-query';

import { Box, Typography, useTheme } from '@mui/material';

import { fetchWeather } from '@api';
import { FavoriteBtn } from '@components/FavoriteBtn';
import { WeatherStateIcon } from '@components/WeatherStateIcon';
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
    queryFn: () => fetchWeather(city),
    queryKey: ['fetchWeather', city],
  });

  const { palette } = useTheme();

  let formattedData;

  if (isSuccess) {
    formattedData = formatWeatherData(data);
  }

  return (
    <Box sx={{ ...styles.box, bgcolor: palette.weatherWidgets?.cardBg }}>
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

export { FavoriteCity };
