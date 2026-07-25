import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AppGlobalStyles } from './AppGlobalStyles';
import { darkPalette, lightPalette } from './palettes';

const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: darkPalette,
    },
    light: {
      palette: lightPalette,
    },
  },
});

interface Props {
  children: React.ReactNode;
}

function AppThemeProvider({ children }: Props) {
  return (
    <ThemeProvider noSsr theme={theme}>
      <CssBaseline />
      <AppGlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export { AppThemeProvider };
