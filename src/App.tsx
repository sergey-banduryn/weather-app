import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router';

import { CssBaseline } from '@mui/material';

import AppToastContainer from '@pages/AppToastContainer';

import AppRouter from './router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CssBaseline />
        <AppRouter />
        <AppToastContainer />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
