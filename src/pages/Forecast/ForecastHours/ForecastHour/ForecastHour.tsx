import NorthIcon from '@mui/icons-material/North';
import { Box, Typography } from '@mui/material';

import { WeatherStateIcon } from '@components';
import { IFormattedForecastData } from '@dataTypes';

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
      <Box sx={styles.wind}>
        <Box sx={[styles.arrowWrap, { rotate: `${String(deg)}deg` }]}>
          <NorthIcon sx={styles.arrow} />
        </Box>
        <Typography>{speed}</Typography>
      </Box>
    </Box>
  );
}

export default ForecastHour;
