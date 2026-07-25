import { GlobalStyles } from '@mui/material';
import type { Theme } from '@mui/material/styles';

const styles = (theme: Theme) => ({
  '.padding': {
    ['@media (max-width: 800px)']: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
});

function AppGlobalStyles() {
  return <GlobalStyles styles={styles} />;
}

export { AppGlobalStyles };
