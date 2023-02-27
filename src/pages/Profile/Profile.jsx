import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Profile = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth]);

  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        {user ? (
          <Typography variant="h4">{user.displayName}</Typography>
        ) : (
          <Typography variant="h4">No User</Typography>
        )}
      </Box>
    </Container>
  );
};
export default Profile;
