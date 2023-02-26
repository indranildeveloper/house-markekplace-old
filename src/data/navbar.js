import { v4 as uuidv4 } from "uuid";

import ExploreIcon from "@mui/icons-material/Explore";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonIcon from "@mui/icons-material/Person";

export const drawerWidth = 400;
export const navItems = [
  {
    id: uuidv4(),
    title: "explore",
    link: "/",
    icon: <ExploreIcon />,
  },
  {
    id: uuidv4(),
    title: "offers",
    link: "/offers",
    icon: <LocalOfferIcon />,
  },
  {
    id: uuidv4(),
    title: "profile",
    link: "/profile",
    icon: <PersonIcon />,
  },
];
