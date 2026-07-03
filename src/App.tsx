import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router';

import { CssBaseline } from '@mui/material';

import { AppToastContainer } from '@components/AppToastContainer';
import AppThemeProvider from '@theme/AppThemeProvider';

import AppRouter from './router';

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

export default App;
