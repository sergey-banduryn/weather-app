import { Box, Typography, useTheme } from '@mui/material';

import { formatTemp, getMonthName, getWeekdayName } from '@helpers';

import { styles } from './styles';

interface IForecastDayProps {
  d_txt: string;
  isActive: boolean;
  minMaxTemp: {
    max: number;
    min: number;
  };
  onClick: () => void;
}

function ForecastDay({
  d_txt,
  isActive,
  minMaxTemp,
  onClick,
}: IForecastDayProps) {
  const { palette } = useTheme();

  const weekdayName = getWeekdayName(d_txt);
  const monthName = getMonthName(d_txt);
  const day = d_txt.slice(8);
  const min = formatTemp(minMaxTemp.min);
  const max = formatTemp(minMaxTemp.max);

  return (
    <Box
      onClick={onClick}
      sx={{
        ...styles.box,
        bgcolor: isActive
          ? palette.weatherWidgets?.cardActiveBg
          : palette.weatherWidgets?.cardBg,
      }}
    >
      <Typography sx={styles.capitalize} variant="subtitle2">
        {weekdayName}
      </Typography>
      <Typography variant="h5">{day}</Typography>
      <Typography sx={styles.capitalize} variant="subtitle2">
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
