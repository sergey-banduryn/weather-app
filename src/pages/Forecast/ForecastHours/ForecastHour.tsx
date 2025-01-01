import { IFormattedForecastData } from "@dataTypes";
import { Box, Typography } from "@mui/material";

interface IForecastHourProps extends IFormattedForecastData {
  time: string;
}

function ForecastHour({ time, temp, humidity, speed }: IForecastHourProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          px: 2,
          bgcolor: "lightgray",
        }}
      >
        {time}
      </Typography>
      <Typography>{temp}</Typography>
      <Typography>{humidity}</Typography>
      <Typography>{speed}</Typography>
    </Box>
  );
}

export default ForecastHour;
