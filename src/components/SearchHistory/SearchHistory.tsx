import { Link as RouterLink } from 'react-router';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, IconButton, Link } from '@mui/material';

import { useStore } from '@store';

import { styles } from './styles';

function SearchHistory() {
  const { clearSearchedCities, searchedCities } = useStore();

  const links = searchedCities.toReversed().map((city) => {
    return (
      <Link component={RouterLink} key={city} to={`/${city}`}>
        {city}
      </Link>
    );
  });

  return (
    <Box sx={styles.box}>
      {links}
      {searchedCities.length > 0 && (
        <IconButton
          aria-label="Clear search history"
          color="primary"
          onClick={clearSearchedCities}
          size="small"
        >
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
      )}
    </Box>
  );
}

export { SearchHistory };
