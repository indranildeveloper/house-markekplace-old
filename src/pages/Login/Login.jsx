import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Login = () => {
  const navigate = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = () => {};

  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Typography variant="h4">Welcome Back</Typography>

        <Box component="form" autoComplete="off" mt={4}>
          <Typography variant="h6">Log In</Typography>
          <TextField
            id="email"
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email"
            variant="outlined"
            margin="normal"
            fullWidth
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
            onChange={(e) => handleChange(e)}
          />
          <Box mt={2}>
            <Link underline="none" component={RouterLink} to="/forgot-password">
              Forgot Password?
            </Link>
          </Box>
          <Button type="submit" variant="contained" size="large" sx={{ mt: 2 }}>
            Log In <ArrowForwardIcon sx={{ ml: 1 }} />
          </Button>
        </Box>

        {/* Google Oauth Component */}
        <Box>
          <Typography variant="body1" mt={2}>
            Already have an account?{" "}
            <Link underline="none" component={RouterLink} to="/register">
              Register
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
