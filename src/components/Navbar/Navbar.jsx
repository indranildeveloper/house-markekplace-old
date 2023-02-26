import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
// Material UI imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrawer from "../NavDrawer/NavDrawer";
import { navItems } from "../../data";

import { styles } from "./styles";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <Box sx={styles.navbarContainer}>
      <AppBar position="relative" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={styles.menuIcon}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={styles.title}>
            House Marketplace
          </Typography>
          <Box sx={styles.navItemContainer}>
            {navItems.map((item) => (
              <Button
                key={item.link}
                component={RouterLink}
                to={item.link}
                sx={{
                  color: pathMatchRoute(item.link) ? "#303030" : "#ffffff",
                  fontWeight: pathMatchRoute(item.link) ? "bold" : "normal",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                {item.icon} {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <NavDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Box>
  );
};

export default Navbar;
