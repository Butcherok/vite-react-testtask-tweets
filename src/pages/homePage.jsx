import { Box, Typography } from "@mui/material";
import { centredItemsStyles, subtitleStyle, wrapperStyle } from "../shared/basicStyles";

const Home = () => {
  return (
    <Box
      sx={{
        ...centredItemsStyles,
        gap: '30px',
        justifyContent: 'flex-start',
        mb: '28px',
        flexWrap: 'wrap',
      }}
    >
      <Box sx={wrapperStyle}>
        <Typography sx={subtitleStyle}>
          Greetings dear guest! Welcome to the Tweets app! Have some fun!
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
