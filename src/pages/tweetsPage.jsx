import { Box } from "@mui/material";
import UserList from "../components/usersList/usersList";
import { centredItemsStyles } from "../shared/basicStyles";

const Home = () => {
  return (
    <Box sx={{ ...centredItemsStyles, flexDirection: 'column', gap: '28px' }}>
      <h1>
        <span>Enjoy watching!</span>
      </h1>
      <UserList />
    </Box>
  );
};

export default Home;
