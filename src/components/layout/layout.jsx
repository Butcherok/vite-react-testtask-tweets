import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import AppNavBar from '../appBar/appBar';

const Layout = () => {
  return (
    <Box>
      <AppNavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Layout;
