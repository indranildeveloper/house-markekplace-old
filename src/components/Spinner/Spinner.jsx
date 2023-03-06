import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
export default Spinner;
