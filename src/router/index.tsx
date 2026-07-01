import { Route, Routes } from 'react-router';

import Home from '@pages/Home';

function AppRouter() {
  return (
    <Routes>
      <Route element={<Home />} path="/:city?" />
    </Routes>
  );
}

export default AppRouter;
