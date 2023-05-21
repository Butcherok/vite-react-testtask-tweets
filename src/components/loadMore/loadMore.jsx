import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import { buttonStyles } from '../../shared/basicStyles';

const LoadMore = ({cards, loadMore}) => {
  return (
    <Box>
      <Button
        disabled={!cards.length}
        sx={{ ...buttonStyles, bgcolor: 'secondary.darker' }}
        onClick={loadMore}
      >
        Load More
      </Button>
    </Box>
  );
};

export default LoadMore;

LoadMore.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object.isRequired),
  loadMore: PropTypes.func.isRequired,
};
