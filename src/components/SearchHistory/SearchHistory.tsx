import { Link as RouterLink } from 'react-router';

import { Box, Link } from '@mui/material';

import { useStore } from '@store';

import { styles } from './styles';

function SearchHistory() {
  const { searchedCities } = useStore();

  const links = searchedCities.toReversed().map((city) => {
    return (
      <Link component={RouterLink} key={city} to={`/${city}`}>
        {city}
      </Link>
    );
  });

  return <Box sx={styles.box}>{links}</Box>;
}

export { SearchHistory };
