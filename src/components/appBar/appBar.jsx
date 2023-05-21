import { Navigation } from '../navigation/navigation';
import { Container, AppBar as AppBarMui } from '@mui/material';
import { appBarStyle, containerStyle } from './appBarStyles';

const AppNavBar = () => {
  return (
    <AppBarMui position="static" sx={appBarStyle}>
      <Container sx={containerStyle}>
        <Navigation />
      </Container>
    </AppBarMui>
  );
};
export default AppNavBar;
