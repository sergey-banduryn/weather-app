import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import AppRouter from "./router";
import AppToastContainer from "@pages/AppToastContainer";

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
