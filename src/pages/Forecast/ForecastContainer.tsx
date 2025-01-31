import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { Box, CircularProgress } from '@mui/material';

import { fetchForecast } from '@api';
import { getForecastDays } from '@helpers';

import ForecastDays from './ForecastDays';

interface IForecastContainerProps {
  city: string;
}

function ForecastContainer({ city }: IForecastContainerProps) {
  const { isPending, data, isError, error } = useQuery({
    queryKey: ['fetchForecast', city],
    queryFn: () => fetchForecast(city),
  });

  useEffect(() => {
    if (isError) toast(error.message);
  }, [isError, error]);

  let forecastDays;
  if (data) forecastDays = getForecastDays(data.list);

  return (
    <>
      {isPending && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 310,
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {forecastDays && <ForecastDays key={city} data={forecastDays} />}
    </>
  );
}

export default ForecastContainer;
