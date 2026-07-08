import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { Box, CircularProgress } from '@mui/material';

import { getForecastDays } from '@helpers';
import { useForecast } from '@react-queries';

import { ForecastDays } from './ForecastDays';

interface IForecastContainerProps {
  city: string;
}

function ForecastContainer({ city }: IForecastContainerProps) {
  const { data, error, isError, isPending } = useForecast(city);

  useEffect(() => {
    if (isError) {
      toast(error.message);
    }
  }, [isError, error]);

  let forecastDays;

  if (data) {
    forecastDays = getForecastDays(data.list);
  }

  return (
    <>
      {isPending && (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            height: 310,
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {forecastDays && <ForecastDays data={forecastDays} key={city} />}
    </>
  );
}

export { ForecastContainer };
