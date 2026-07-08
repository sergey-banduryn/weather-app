import { Box, Typography, useTheme } from '@mui/material';

import { FavoriteBtn } from '@components/FavoriteBtn';
import { WeatherStateIcon } from '@components/WeatherStateIcon';
import { formatWeatherData } from '@helpers';
import { useWeather } from '@react-queries';

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
  const { data, isSuccess } = useWeather(city);

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
