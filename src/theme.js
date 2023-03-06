import { createTheme } from "@mui/material/styles";
import { blue, pink } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: pink[500],
    },
  },
});

export default theme;
