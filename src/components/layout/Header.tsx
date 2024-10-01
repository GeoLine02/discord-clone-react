import { useLocation } from "react-router-dom";
import NitroHeader from "../nitro/NitroHeader";
import routes from "../../constants/routes";

const Header = () => {
  const location = useLocation();

  return (
    <header>{location.pathname === routes.NITRO && <NitroHeader />}</header>
  );
};

export default Header;
