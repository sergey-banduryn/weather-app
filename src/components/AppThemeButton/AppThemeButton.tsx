import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { IconButton } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';

function AppThemeButton() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleTheme = () => {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {colorScheme === 'dark' ? (
        <DarkModeOutlinedIcon />
      ) : (
        <LightModeOutlinedIcon />
      )}
    </IconButton>
  );
}

export { AppThemeButton };
