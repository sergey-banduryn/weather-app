import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';

import { styles } from './styles';

function NoCity() {
  return (
    <Box sx={styles.box}>
      <Box>
        <SearchIcon sx={styles.icon} />
      </Box>
      <Typography>Please, search city</Typography>
    </Box>
  );
}

export { NoCity };
