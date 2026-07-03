import { Box, Container } from '@mui/material';

import { AppTheme } from '@components/AppTheme';
import { NoCity } from '@components/NoCity';
import { SearchCity } from '@components/SearchCity';
import { SearchHistory } from '@components/SearchHistory';
import { CurrentWeatherContainer } from '@features/CurrentWeather';
import { FavoriteCities } from '@features/FavoriteCities';
import { ForecastContainer } from '@features/Forecast';
import { useCity } from '@hooks';

function Home() {
  const city = useCity();

  return (
    <Container maxWidth="md">
      <AppTheme />
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
        {city ? <CurrentWeatherContainer city={city.name} /> : <NoCity />}
        <FavoriteCities />
      </Box>
      {city && <ForecastContainer city={city.name} />}
    </Container>
  );
}

export { Home };
