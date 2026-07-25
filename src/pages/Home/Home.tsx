import { Box } from '@mui/material';

import { AppThemeButton } from '@components/AppThemeButton';
import { NoCity } from '@components/NoCity';
import { SearchCity } from '@components/SearchCity';
import { SearchHistory } from '@components/SearchHistory';
import { CurrentWeatherContainer } from '@features/CurrentWeather';
import { FavoriteCities } from '@features/FavoriteCities';
import { ForecastContainer } from '@features/Forecast';
import { useCity } from '@hooks';

import { HomeLayout } from './HomeLayout';
import { styles } from './styles';

function Home() {
  const city = useCity();

  const searchSlot = (
    <>
      <Box sx={styles.wrapperBox}>
        <SearchCity />
        <AppThemeButton />
      </Box>
      <SearchHistory />
    </>
  );

  const currentWeatherSlot = city ? (
    <CurrentWeatherContainer city={city.name} />
  ) : (
    <NoCity />
  );

  const forecastSlot = city && <ForecastContainer city={city.name} />;

  return (
    <HomeLayout
      currentWeatherSlot={currentWeatherSlot}
      favoritesSlot={<FavoriteCities />}
      forecastSlot={forecastSlot}
      searchSlot={searchSlot}
    />
  );
}

export { Home };
