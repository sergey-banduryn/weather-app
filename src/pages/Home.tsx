import { useParams } from "react-router";
import SearchHistory from "./SearchHistory";
import SearchCity from "./SearchCity";
import { Box, Container } from "@mui/material";
import CurrentWeather from "./CurrentWeather";
import FavoriteCities from "./FavoriteCities";
import ForecastContainer from "./Forecast";
import NoCity from "./NoCity";

function Home() {
  const { city } = useParams();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          my: 4,
        }}
      >
        <SearchCity />
        <SearchHistory />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          my: 2,
          width: 760,
        }}
      >
        {city ? <CurrentWeather city={city} /> : <NoCity />}
        <FavoriteCities />
      </Box>
      {city && <ForecastContainer city={city} />}
    </Container>
  );
}

export default Home;
