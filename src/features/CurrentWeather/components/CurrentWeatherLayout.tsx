import React from 'react';

import { Box, Typography, useTheme } from '@mui/material';

import { FavoriteBtn } from '@components';

import { styles } from './styles';

interface Props {
  children: React.ReactNode;
  city: string;
  favorite: {
    isFavorite: boolean;
    toggleFavorite: () => void;
  };
}

function CurrentWeatherLayout({ children, city, favorite }: Props) {
  const { palette } = useTheme();

  return (
    <Box sx={{ ...styles.box, bgcolor: palette.weatherWidgets?.mainBg }}>
      <Typography sx={styles.text} variant="h4">
        {city}
      </Typography>
      <Box sx={styles.favoriteBtn}>
        <FavoriteBtn {...favorite} />
      </Box>
      {children}
    </Box>
  );
}

export { CurrentWeatherLayout };
