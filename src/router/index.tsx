import { Route, Routes } from 'react-router';

import Home from '@pages/Home';

function AppRouter() {
  return (
    <Routes>
      <Route element={<Home />} path="/">
        <Route element={<Home />} path=":city" />
      </Route>
    </Routes>
  );
}

export default AppRouter;
