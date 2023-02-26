import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { navItems, drawerWidth } from "../../data";

const NavDrawer = ({ window, mobileOpen, handleDrawerToggle }) => {
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            House Marketplace
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={item.link}
                  sx={{ textAlign: "center" }}
                >
                  <ListItemText primary={item.title.toUpperCase()} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
export default NavDrawer;
