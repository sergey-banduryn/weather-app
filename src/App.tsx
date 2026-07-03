import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router';

import { CssBaseline } from '@mui/material';

import { AppToastContainer } from '@components/AppToastContainer';
import { AppRouter } from '@router';
import { AppThemeProvider } from '@theme';

const queryClient = new QueryClient();

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
