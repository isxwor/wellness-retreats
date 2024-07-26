import { Route, Routes } from 'react-router-dom';

import { RootLayout } from './components/layout/root-layout';
import { Home } from './components/pages/home';

export const App = () => (
  <Routes>
    <Route
      path='/'
      element={<RootLayout />}
    >
      <Route
        index
        element={<Home />}
      />
    </Route>
  </Routes>
);
