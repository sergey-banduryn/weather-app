import { Box, Typography } from "@mui/material";
import ForecastHour from "./ForecastHour";
import { formatForecastData } from "@helpers";
import { styles } from "./styles";
import { IForecastItemResponse } from "@dataTypes";

interface IForecastHoursProps {
  hours: IForecastItemResponse[];
}

function ForecastHours({ hours }: IForecastHoursProps) {
  const forecastHours = hours.map((hourData) => {
    const { dt_txt } = hourData;
    const { humidity, temp, speed, state } = formatForecastData(hourData);
    const time = dt_txt.slice(11, 16);

    return (
      <ForecastHour key={dt_txt} {...{ time, temp, humidity, speed, state }} />
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
