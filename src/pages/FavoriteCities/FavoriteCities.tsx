import { Box } from '@mui/material';
import FavoriteCity from './FavoriteCity';
import { useStore } from '@store';
import { styles } from './styles';

function FavoriteCities() {
  const { favoriteCities, toggleFavorite } = useStore();

  const cities = [...favoriteCities].reverse().map((city) => {
    const isFavorite = favoriteCities.includes(city);
    const toggleFavoriteCity = () => toggleFavorite(city);

    return (
      <FavoriteCity
        key={city}
        {...{
          city,
          isFavorite,
          toggleFavorite: toggleFavoriteCity,
        }}
      />
    );
  });

  return (
    <Box sx={styles.hidden}>
      <Box sx={styles.box}>{cities}</Box>
    </Box>
  );
}

export default FavoriteCities;
