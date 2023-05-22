import { useLocation, Link } from 'react-router-dom';
import { Box, Button, Tooltip } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { buttonStyle, iconStyle, wrapperStyle } from './btnBackStyles';

export const BtnBack = () => {
  const location = useLocation();

  const backLink = location.state?.from ?? '/';

  return (
    <Box sx={wrapperStyle}>
      <Tooltip title="Previous page" placement="right" arrow>
        <Button
          component={Link}
          to={backLink}
          variant="outlined"
          sx={buttonStyle}
        >
          <ChevronLeftIcon sx={iconStyle} />
          Go Back
        </Button>
      </Tooltip>
    </Box>
  );
};
