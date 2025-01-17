import FavoriteBtn from "@components/FavoriteBtn";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { styles } from "./styles";
import { formatWeatherData } from "@helpers";
import { fetchWeather } from "@api";
import { useStore } from "@store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface ICurrentWeatherProps {
  city: string;
}

function CurrentWeather({ city }: ICurrentWeatherProps) {
  const { addSearchedCity, favoriteCities, toggleFavorite } = useStore();

  const { isPending, isError, isSuccess, data, error } = useQuery({
    queryKey: ["fetchWeather", city],
    queryFn: () => fetchWeather(city),
  });

  useEffect(() => {
    if (isSuccess) {
      addSearchedCity(data.name);
    }
  }, [city, isSuccess]);

  useEffect(() => {
    if (isError) toast(error.message);
  }, [isError]);

  let formattedData;
  if (data) formattedData = formatWeatherData(data);

  const isFavorite = favoriteCities.includes(city);
  const toggleFavoriteCity = () => toggleFavorite(city);

  return (
    <Box sx={styles.box}>
      <Typography variant="h4">{city}</Typography>
      <Box sx={styles.favoriteBtn}>
        <FavoriteBtn {...{ isFavorite, toggleFavorite: toggleFavoriteCity }} />
      </Box>
      {isPending && (
        <Stack spacing={1}>
          <Skeleton variant="rounded" width={70} height={30} />
          <Skeleton variant="rounded" width={70} height={30} />
          <Skeleton variant="rounded" width={70} height={30} />
        </Stack>
      )}
      {isSuccess && (
        <>
          <Typography variant="h5">{formattedData?.temp}</Typography>
          <Typography variant="h5">{formattedData?.humidity}</Typography>
          <Typography variant="h5">{formattedData?.speed}</Typography>
        </>
      )}
    </Box>
  );
}

export default CurrentWeather;
