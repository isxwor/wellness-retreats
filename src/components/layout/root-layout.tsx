import { Outlet } from 'react-router-dom';

import { Appbar } from '#/components/layout/appbar';
import { Footer } from '#/components/layout/footer';
import { TailwindIndicator } from '#/components/tailwind-indicator';

export const RootLayout = () => (
  <>
    <Appbar />
    <Outlet />
    <Footer />
    <TailwindIndicator />
  </>
);
