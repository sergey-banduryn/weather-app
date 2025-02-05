import React from 'react';

import { Box, Typography } from '@mui/material';

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
  return (
    <Box sx={styles.box}>
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

export default CurrentWeatherLayout;
