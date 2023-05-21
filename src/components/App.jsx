import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import { CssBaseline } from '@mui/material';

const Home = lazy(() => import('../pages/homePage'));
const Tweets = lazy(() => import('../pages/tweetsPage'));
const NotFound = lazy(() => import('../pages/notFound'));


export default function App() {
  return (
    <>
      <CssBaseline>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tweets" element={<Tweets />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CssBaseline>
    </>
  );
}