import { QueryClient } from '@tanstack/react-query';

import { APIError } from '@api';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (error instanceof APIError && error.status === 404) {
          return false;
        }

        return failureCount < 3;
      },
    },
  },
});

export { queryClient };
