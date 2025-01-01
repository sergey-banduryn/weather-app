import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import AppRouter from "./router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CssBaseline />
        <AppRouter />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
