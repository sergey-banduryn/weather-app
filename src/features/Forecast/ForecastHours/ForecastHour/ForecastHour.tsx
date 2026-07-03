import { Box, Typography } from '@mui/material';

import { WeatherStateIcon, Wind } from '@components';
import type { IFormattedForecastData } from '@types';

import { styles } from './styles';

interface IForecastHourProps extends IFormattedForecastData {
  time: string;
}

function ForecastHour({
  deg,
  humidity,
  speed,
  state,
  temp,
  time,
}: IForecastHourProps) {
  return (
    <Box sx={styles.box}>
      <Typography sx={styles.time}>{time}</Typography>
      <Box sx={styles.stateIcon}>
        <WeatherStateIcon state={state} />
      </Box>
      <Typography>{temp}</Typography>
      <Typography>{humidity}</Typography>
      <Wind
        {...{
          deg,
          speed,
          styles: { arrowWrap: styles.arrowWrap },
        }}
      />
    </Box>
  );
}

export { ForecastHour };
