import { Box, CircularProgress } from '@mui/material';

import { getForecastDays } from '@helpers';
import { useForecast } from '@react-queries';

import { ForecastDays } from '../ForecastDays';
import { styles } from './styles';

interface IForecastContainerProps {
  city: string;
}

function ForecastContainer({ city }: IForecastContainerProps) {
  const { data, isPending } = useForecast(city);

  let forecastDays;

  if (data) {
    forecastDays = getForecastDays(data.list);
  }

  return (
    <>
      {isPending && (
        <Box sx={styles.box}>
          <CircularProgress />
        </Box>
      )}
      {forecastDays && <ForecastDays data={forecastDays} key={city} />}
    </>
  );
}

export { ForecastContainer };
