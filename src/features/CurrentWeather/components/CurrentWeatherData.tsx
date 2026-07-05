import { Box, Typography } from '@mui/material';

import { BackgroundImageByWeather } from '@components/BackgroundImageByWeather';
import { WeatherStateIcon } from '@components/WeatherStateIcon';
import { Wind } from '@components/Wind';
import type { WindStyles } from '@components/Wind';
import type { IFormattedWeatherData } from '@types';

import { styles } from './styles';

interface Props {
  data: IFormattedWeatherData;
}

function CurrentWeatherData({ data }: Props) {
  const { deg, humidity, speed, state, temp } = data;
  const windStyles: WindStyles = {
    variant: 'h5',
  };

  return (
    <>
      <BackgroundImageByWeather state={state} />
      <Typography sx={styles.text} variant="h5">
        {temp}
      </Typography>
      <Typography sx={styles.text} variant="h5">
        {humidity}
      </Typography>
      <Wind
        {...{
          deg,
          speed,
          styles: windStyles,
        }}
      />
      <Box sx={styles.stateIcon}>
        <WeatherStateIcon state={state} />
      </Box>
    </>
  );
}

export { CurrentWeatherData };
