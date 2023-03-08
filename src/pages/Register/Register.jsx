import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Container from "@mui/material/Container";
import { db } from "../../firebase.config";
import { OAuth } from "../../components";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData };

      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      navigate("/");
    } catch (error) {
      toast.error("Something went wrong with Registration!");
    }
  };

  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Typography variant="h4">Welcome</Typography>
        <Box
          component="form"
          autoComplete="off"
          mt={4}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Typography variant="h6">Register</Typography>
          <TextField
            id="name"
            type="text"
            name="name"
            label="Name"
            placeholder="Enter your name"
            variant="outlined"
            margin="normal"
            fullWidth
            value={name}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            id="email"
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            variant="outlined"
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            id="password"
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => handleChange(e)}
          />
          <Box mt={2}>
            <Link underline="none" component={RouterLink} to="/forgot-password">
              Forgot Password?
            </Link>
          </Box>
          <Button type="submit" variant="contained" size="large" sx={{ mt: 2 }}>
            Register <ArrowForwardIcon sx={{ ml: 1 }} />
          </Button>
        </Box>

        {/* Google Oauth Component */}
        <OAuth />
        <Box>
          <Typography variant="body1" mt={2}>
            Already have an account?{" "}
            <Link underline="none" component={RouterLink} to="/login">
              Log In
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
