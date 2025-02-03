import { Box, Typography } from '@mui/material';

import { IForecastItemResponse } from '@dataTypes';
import { formatForecastData } from '@helpers';

import ForecastHour from './ForecastHour';
import { styles } from './styles';

interface IForecastHoursProps {
  hours: IForecastItemResponse[];
}

function ForecastHours({ hours }: IForecastHoursProps) {
  const forecastHours = hours.map((hourData) => {
    const { dt_txt } = hourData;
    const { deg, humidity, speed, state, temp } = formatForecastData(hourData);
    const time = dt_txt.slice(11, 16);

    return (
      <ForecastHour
        key={dt_txt}
        {...{ deg, humidity, speed, state, temp, time }}
      />
    );
  });

  return (
    <Box sx={styles.box}>
      <Box sx={styles.titles}>
        <Typography sx={styles.timeTitle}>&nbsp;</Typography>
        <Typography>&nbsp;</Typography>
        <Typography>Temp, °C</Typography>
        <Typography>Humidity, %</Typography>
        <Typography>Wind, m/s</Typography>
      </Box>
      {forecastHours}
    </Box>
  );
}

export default ForecastHours;
