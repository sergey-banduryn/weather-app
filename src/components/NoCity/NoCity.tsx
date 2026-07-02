import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';

function NoCity() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        bgcolor: '#ffedd3',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        p: 3,
        position: 'relative',
        width: 250,
      }}
    >
      <Box>
        <SearchIcon
          sx={{
            color: 'grey',
            height: 70,
            width: 70,
          }}
        />
      </Box>
      <Typography>Please, search city</Typography>
    </Box>
  );
}

export { NoCity };
