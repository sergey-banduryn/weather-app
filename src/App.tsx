import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router';

import { CssBaseline } from '@mui/material';

import { AppToastContainer } from '@components/AppToastContainer';
import { queryClient } from '@react-queries';
import { AppRouter } from '@router';
import { AppThemeProvider } from '@theme';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <CssBaseline />
        <BrowserRouter>
          <AppRouter />
          <AppToastContainer />
        </BrowserRouter>
      </AppThemeProvider>
    </QueryClientProvider>
  );
}

export { App };
