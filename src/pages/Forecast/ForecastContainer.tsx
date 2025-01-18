import { useQuery } from "@tanstack/react-query";
import { fetchForecast } from "@api";
import { getForecastDays } from "@helpers";
import ForecastDays from "./ForecastDays";
import { Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface IForecastContainerProps {
  city: string;
}

function ForecastContainer({ city }: IForecastContainerProps) {
  const { isPending, data, isError, error } = useQuery({
    queryKey: ["fetchForecast", city],
    queryFn: () => fetchForecast(city),
  });
  console.log(data);

  useEffect(() => {
    if (isError) toast(error.message);
  }, [isError]);

  let forecastDays;
  if (data) forecastDays = getForecastDays(data.list);

  return (
    <>
      {isPending && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 310,
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {forecastDays && <ForecastDays key={city} data={forecastDays} />}
    </>
  );
}

export default ForecastContainer;
