import { WeatherStateIcon } from "@components";
import { IFormattedForecastData } from "@dataTypes";
import { Box, Typography } from "@mui/material";
import { styles } from "./styles";

interface IForecastHourProps extends IFormattedForecastData {
  time: string;
}

function ForecastHour({
  time,
  temp,
  humidity,
  speed,
  state,
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
