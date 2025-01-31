import { Box, Typography } from '@mui/material';

import { WeatherStateIcon } from '@components';
import { IFormattedForecastData } from '@dataTypes';

import { styles } from './styles';

interface IForecastHourProps extends IFormattedForecastData {
  time: string;
}

function ForecastHour({
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
      <Typography>{speed}</Typography>
    </Box>
  );
}

export default ForecastHour;
