import type { ReactNode } from 'react';

import { Box } from '@mui/material';

import { styles } from './styles';

interface HomeLayoutProps {
  currentWeatherSlot: ReactNode;
  favoritesSlot: ReactNode;
  forecastSlot: ReactNode;
  searchSlot: ReactNode;
}

function HomeLayout({
  currentWeatherSlot,
  favoritesSlot,
  forecastSlot,
  searchSlot,
}: HomeLayoutProps) {
  return (
    <Box sx={styles.grid}>
      <Box className="padding" sx={styles.searchBox}>
        {searchSlot}
      </Box>

      <Box className="padding" sx={styles.currentBox}>
        {currentWeatherSlot}
      </Box>

      <Box className="padding" sx={styles.favoriteBox}>
        {favoritesSlot}
      </Box>

      <Box sx={styles.forecastBox}>{forecastSlot}</Box>
    </Box>
  );
}

export { HomeLayout };
