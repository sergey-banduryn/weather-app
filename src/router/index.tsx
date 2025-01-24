import Home from '@pages/Home';
import { Route, Routes } from 'react-router';

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
