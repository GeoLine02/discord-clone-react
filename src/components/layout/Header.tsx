import { useLocation } from "react-router-dom";
import FriendsHeader from "../channels/FriendsHeader";
import NitroHeader from "../nitro/NitroHeader";
import routes from "../../constants/routes";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-secondary-gray py-1 border-b border-gray-500 px-2">
      {location.pathname === routes.CHANNEL && <FriendsHeader />}
      {location.pathname === routes.NITRO && <NitroHeader />}
    </header>
  );
};

export default Header;
