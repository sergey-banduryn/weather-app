import { Route, Routes } from 'react-router';

import Home from '@pages/Home';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path=":city" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
