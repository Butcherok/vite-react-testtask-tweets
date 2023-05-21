import { Box } from "@mui/material";
import UserList from "../components/usersList/usersList";
import { centredItemsStyles } from "../shared/basicStyles";

const Home = () => {
  return (
    <Box sx={{ ...centredItemsStyles, flexDirection: 'column', gap: '28px' }}>
      <h1>
        <span>Hello! i am your PhoneBook.</span>
          </h1>
          <UserList/>
    </Box>
  );
};

export default Home;
