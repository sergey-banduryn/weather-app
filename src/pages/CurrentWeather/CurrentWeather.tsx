import FavoriteBtn from "@components/FavoriteBtn";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { styles } from "./styles";
import { formatWeatherData } from "@helpers";
import { fetchWeather } from "@api";
import { useStore } from "@store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface ICurrentWeatherProps {
  city: string;
}

function CurrentWeather({ city }: ICurrentWeatherProps) {
  const { addCity, favoriteCities, toggleFavorite } = useStore();

  const { isPending, isError, isSuccess, data, error } = useQuery({
    queryKey: ["fetchWeather", city],
    queryFn: () => fetchWeather(city),
  });

  useEffect(() => {
    if (isSuccess) {
      addCity(data.name);
    }
  }, [city, isSuccess]);

  const isFavorite = favoriteCities.includes(city);
  const toggleFavoriteCity = () => toggleFavorite(city);

  let formattedData;
  if (data) formattedData = formatWeatherData(data);

  return (
    <Box sx={styles.box}>
      {isPending && (
        <Stack spacing={1}>
          <Skeleton variant="rounded" width={120} height={40} />
          <Skeleton variant="rounded" width={70} height={30} />
          <Skeleton variant="rounded" width={70} height={30} />
          <Skeleton variant="rounded" width={70} height={30} />
        </Stack>
      )}
      <Typography variant="h4">{formattedData?.name}</Typography>
      <Typography variant="h5">{formattedData?.temp}</Typography>
      <Typography variant="h5">{formattedData?.humidity}</Typography>
      <Typography variant="h5">{formattedData?.speed}</Typography>
      <Box sx={styles.favoriteBtn}>
        <FavoriteBtn {...{ isFavorite, toggleFavorite: toggleFavoriteCity }} />
      </Box>
    </Box>
  );
}

export default CurrentWeather;
