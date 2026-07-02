import { Link as RouterLink } from 'react-router';

import { Box, Link } from '@mui/material';

import { useStore } from '@store';

function SearchHistory() {
  const { searchedCities } = useStore();

  const links = searchedCities.toReversed().map((city) => {
    return (
      <Link component={RouterLink} key={city} to={`/${city}`}>
        {city}
      </Link>
    );
  });

  return <Box sx={{ display: 'flex', gap: 1, my: 1 }}>{links}</Box>;
}

export { SearchHistory };
