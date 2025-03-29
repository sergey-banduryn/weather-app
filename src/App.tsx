import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppThemeProvider from '@theme/AppThemeProvider';
import { BrowserRouter } from 'react-router';

import { CssBaseline } from '@mui/material';

import AppToastContainer from '@pages/AppToastContainer';

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
