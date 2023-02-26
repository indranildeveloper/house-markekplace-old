import { createTheme } from "@mui/material/styles";
import { teal, blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});

export default theme;
