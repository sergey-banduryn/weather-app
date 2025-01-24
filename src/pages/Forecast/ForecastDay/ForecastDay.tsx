import { Box, Typography } from '@mui/material';
import { formatTemp, getMonthName, getWeekdayName } from '@helpers';
import { styles } from './styles';

interface IForecastDayProps {
  d_txt: string;
  onClick: () => void;
  isActive: boolean;
  minMaxTemp: {
    min: number;
    max: number;
  };
}

function ForecastDay({
  d_txt,
  onClick,
  isActive,
  minMaxTemp,
}: IForecastDayProps) {
  const weekdayName = getWeekdayName(d_txt);
  const monthName = getMonthName(d_txt);
  const day = d_txt.slice(8);
  const min = formatTemp(minMaxTemp.min);
  const max = formatTemp(minMaxTemp.max);

  return (
    <Box
      sx={{
        ...styles.box,
        bgcolor: isActive ? 'burlywood' : 'bisque',
      }}
      onClick={onClick}
    >
      <Typography variant="subtitle2" sx={styles.capitalize}>
        {weekdayName}
      </Typography>
      <Typography variant="h5">{day}</Typography>
      <Typography variant="subtitle2" sx={styles.capitalize}>
        {monthName}
      </Typography>
      <Box sx={styles.minMaxBox}>
        <Box>
          <Typography sx={styles.minMaxTitle}>min</Typography>
          <Typography sx={styles.minMaxValue}>{min}</Typography>
        </Box>
        <Box>
          <Typography sx={styles.minMaxTitle}>max</Typography>
          <Typography sx={styles.minMaxValue}>{max}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ForecastDay;
