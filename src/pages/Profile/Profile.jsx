import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { db } from "../../firebase.config";

const Profile = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
  });

  const [changeDetails, setChangeDetails] = useState(false);

  const { name, email } = formData;

  const handleLogOut = () => {
    auth.signOut();
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, { name });
      }
    } catch (error) {
      toast.error("Could not update profile details");
    }
  };

  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4">My Profile</Typography>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => handleLogOut()}
          >
            Log Out
          </Button>
        </Box>

        <Box mt={4} sx={{ display: "flex", gap: 4 }}>
          <Typography variant="h6">Personal Details</Typography>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              changeDetails && handleSubmit();
              setChangeDetails((prevState) => !prevState);
            }}
          >
            {changeDetails ? "done" : "change"}
          </Button>
        </Box>

        <Box mt={4}>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              type="text"
              id="name"
              name="name"
              disabled={!changeDetails}
              label="Name"
              value={name}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              type="email"
              id="email"
              name="email"
              disabled={true}
              label="Email"
              value={email}
              onChange={(e) => handleChange(e)}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
