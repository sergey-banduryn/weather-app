import { Box, Typography } from "@mui/material";
import FavoriteBtn from "@components/FavoriteBtn";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "@api";
import { formatWeatherData } from "@helpers";

interface IFavoriteCityProps {
  city: string;
  isFavorite: boolean;
  toggleFavorite: () => void;
}

function FavoriteCity({
  city,
  isFavorite,
  toggleFavorite,
}: IFavoriteCityProps) {
  const { data, isSuccess } = useQuery({
    queryKey: ["fetchWeather", city],
    queryFn: () => fetchWeather(city),
    enabled: !!city?.length,
  });

  let formattedData;

  if (isSuccess) formattedData = formatWeatherData(data);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: 250,
        px: 2,
        py: 1,
        borderRadius: 4,
        bgcolor: "#ffedd3",
      }}
    >
      <Typography
        sx={{
          width: 1 / 3,
        }}
      >
        {city}
      </Typography>
      <Typography>{formattedData?.temp}</Typography>
      <FavoriteBtn {...{ isFavorite, toggleFavorite }} />
    </Box>
  );
}

export default FavoriteCity;
