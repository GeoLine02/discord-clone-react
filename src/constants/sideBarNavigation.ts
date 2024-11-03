import { FaUserFriends } from "react-icons/fa";
import routes from "./routes";
import { TiRefreshOutline } from "react-icons/ti";
import { CiShop } from "react-icons/ci";

const sideBarNavigation = [
  {
    title: "Friends",
    icon: FaUserFriends,
    path: routes.CHANNEL,
  },
  {
    title: "Nitro",
    icon: TiRefreshOutline,
    path: routes.CHANNEL,
  },
  {
    title: "Shop",
    icon: CiShop,
    path: routes.CHANNEL,
  },
];

export default sideBarNavigation;
