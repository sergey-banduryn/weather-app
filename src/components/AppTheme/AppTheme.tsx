import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useColorScheme } from '@mui/material/styles';

import { styles } from './styles';

function AppTheme() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <Box sx={styles.box}>
      <FormControl>
        <FormLabel id="demo-theme-toggle">Theme</FormLabel>
        <RadioGroup
          aria-labelledby="demo-theme-toggle"
          name="theme-toggle"
          onChange={(event) => {
            setColorScheme(event.target.value as 'dark' | 'light');
          }}
          row
          value={colorScheme}
        >
          <FormControlLabel control={<Radio />} label="Light" value="light" />
          <FormControlLabel control={<Radio />} label="Dark" value="dark" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export { AppTheme };
