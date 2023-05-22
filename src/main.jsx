import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css';
import App from './components/App.jsx';
import { ThemeProvider } from '@mui/material';
import { theme } from './shared/constStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter
        basename={import.meta.env.DEV ? '/' : '/vite-react-testtask-tweets/'}
      >
        <HashRouter>
          <App />
        </HashRouter>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
