import { Box } from "@mui/material";
import UserList from "../components/usersList/usersList";
import { centredItemsStyles } from "../shared/basicStyles";
import { BtnBack } from "../components/btnBack/btnBack";

const Home = () => {
  return (
    <Box sx={{ ...centredItemsStyles, flexDirection: 'column', gap: '28px' }}>
      <BtnBack />
      <h1>
        <span>Make your choice!</span>
      </h1>
      <UserList />
    </Box>
  );
};

export default Home;
