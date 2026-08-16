import { QueryClientProvider } from '@tanstack/react-query';
import { HashRouter } from 'react-router';

import { AppToastContainer } from '@components/AppToastContainer';
import { queryClient } from '@react-queries';
import { AppRouter } from '@router';
import { AppThemeProvider } from '@theme';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <HashRouter>
          <AppRouter />
          <AppToastContainer />
        </HashRouter>
      </AppThemeProvider>
    </QueryClientProvider>
  );
}

export { App };
