import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Auth, getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email with reset link has sent!");
      setEmail("");
    } catch (error) {
      toast.error("Could not send the reset email!");
    }
  };

  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Typography variant="h4" mb={2}>
          Forgot Password
        </Typography>

        <Box component="form" onSubmit={(e) => handleSubmit(e)}>
          <TextField
            id="email"
            name="email"
            label="Email"
            placeholder="Enter Your Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => handleChange(e)}
          />

          <Box my={2}>
            <Typography mb={1}>Send Reset Link</Typography>
            <Button type="submit" size="large" variant="contained">
              Submit <ArrowForwardIcon />
            </Button>
          </Box>

          <Box my={2}>
            <Typography variant="body1">
              Remember your password?{" "}
              <Link component={RouterLink} to="/login" underline="none">
                Log In
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
