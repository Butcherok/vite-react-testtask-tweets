import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Navigation } from '../navigation/navigation';

export default function AppNavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1, width: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
            <Navigation />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
