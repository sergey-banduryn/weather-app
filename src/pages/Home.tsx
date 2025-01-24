import SearchHistory from './SearchHistory';
import SearchCity from './SearchCity';
import { Box, Container } from '@mui/material';
import CurrentWeather from './CurrentWeather';
import FavoriteCities from './FavoriteCities';
import ForecastContainer from './Forecast';
import NoCity from './NoCity';
import { useCity } from '@hooks';

function Home() {
  const city = useCity();

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
          display: 'flex',
          justifyContent: 'space-between',
          my: 2,
          width: 760,
        }}
      >
        {city ? <CurrentWeather city={city.name} /> : <NoCity />}
        <FavoriteCities />
      </Box>
      {city && <ForecastContainer city={city.name} />}
    </Container>
  );
}

export default Home;
