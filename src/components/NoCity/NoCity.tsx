import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography, useTheme } from '@mui/material';

import { styles } from './styles';

function NoCity() {
  const { palette } = useTheme();

  return (
    <Box sx={{ ...styles.box, bgcolor: palette.weatherWidgets?.mainBg }}>
      <Box>
        <SearchIcon sx={styles.icon} />
      </Box>
      <Typography>City not found. Please, search again.</Typography>
    </Box>
  );
}

export { NoCity };
