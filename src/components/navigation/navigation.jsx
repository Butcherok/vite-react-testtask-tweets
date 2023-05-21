import { Box, Button, List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { buttonStyle, navItemStyle, navListStyle } from './navigationStyles';

export const Navigation = () => {
  return (
    <Box component="nav">
      <List sx={navListStyle}>
        <ListItem sx={navItemStyle}>
          <Button component={NavLink} to={'/'} sx={buttonStyle}>
            Home
          </Button>
        </ListItem>
        <ListItem>
          <Button component={NavLink} to={'/tweets'} sx={buttonStyle}>
            Tweets
          </Button>
        </ListItem>
      </List>
    </Box>
  );
};
