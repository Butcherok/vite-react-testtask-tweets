import { Box, Typography } from "@mui/material";
import { centredItemsStyles, subtitleStyle, wrapperStyle } from "../shared/basicStyles";

const Home = () => {
  return (
    <Box
      sx={{
        ...centredItemsStyles,
        gap: '30px',
        justifyContent: 'center',
        mb: '190px',
        flexWrap: 'wrap',
        height: '30vw',
      }}
    >
      <Box sx={wrapperStyle}>
        <Typography component="h1" sx={subtitleStyle}>
          Greetings dear guest!
          <br />
          Welcome to the Tweets app!
          <br />
          Have some fun!
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
