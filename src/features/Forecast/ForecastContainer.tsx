import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { Box, CircularProgress } from '@mui/material';

import { fetchForecast } from '@api';
import { getForecastDays } from '@helpers';

import { ForecastDays } from './ForecastDays';

interface IForecastContainerProps {
  city: string;
}

function ForecastContainer({ city }: IForecastContainerProps) {
  const { data, error, isError, isPending } = useQuery({
    queryFn: () => fetchForecast(city),
    queryKey: ['fetchForecast', city],
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
