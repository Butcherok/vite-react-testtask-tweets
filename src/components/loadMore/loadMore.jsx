import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const LoadMore = (cards, loadMore) => {
  return (
    <Box>
      <button type="button" disabled={!cards.length} onClick={() => loadMore()}>
        Load More
      </button>
    </Box>
  );
};

export default LoadMore;

LoadMore.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object.isRequired),
  loadMore: PropTypes.func.isRequired,
};
