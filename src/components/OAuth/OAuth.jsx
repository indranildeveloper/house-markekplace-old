import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GoogleIcon from "@mui/icons-material/Google";
import { db } from "../../firebase.config";

const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // Check for user
      const docRef = doc(db, "users", user.uid);
      const documentSnapShot = await getDoc(docRef);
      // If user does not exists create user
      if (!documentSnapShot.exists()) {
        setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google!");
    }
  };

  return (
    <Box mt={2}>
      <Typography variant="body1" mb={1}>
        Or {location.pathname === "/register" ? "Register" : "Log In"} with
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        onClick={() => handleClick()}
      >
        <GoogleIcon color="primary" sx={{ mr: 1 }} /> Google
      </Button>
    </Box>
  );
};

export default OAuth;
