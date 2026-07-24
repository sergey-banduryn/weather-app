import { Box, Container } from '@mui/material';

import { AppThemeButton } from '@components/AppThemeButton';
import { NoCity } from '@components/NoCity';
import { SearchCity } from '@components/SearchCity';
import { SearchHistory } from '@components/SearchHistory';
import { CurrentWeatherContainer } from '@features/CurrentWeather';
import { FavoriteCities } from '@features/FavoriteCities';
import { ForecastContainer } from '@features/Forecast';
import { useCity } from '@hooks';

import { styles } from './styles';

function Home() {
  const city = useCity();

  return (
    <Container maxWidth="md">
      <Box sx={styles.searchBox}>
        <Box sx={styles.wrapperBox}>
          <SearchCity />
          <AppThemeButton />
        </Box>
        <SearchHistory />
      </Box>
      <Box sx={styles.mainBox}>
        {city ? <CurrentWeatherContainer city={city.name} /> : <NoCity />}
        <FavoriteCities />
      </Box>
      {city && <ForecastContainer city={city.name} />}
    </Container>
  );
}

export { Home };
