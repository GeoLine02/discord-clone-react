import { useNavigate } from "react-router-dom";
import ServerList from "../servers/serverList";
import { FaDiscord } from "react-icons/fa";
import routes from "../../constants/routes";

const SideBar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(routes.CHANNEL);
  };

  return (
    <div className="flex bg-primary-gray">
      <section className="flex flex-col items-center gap-2 py-2 min-h-screen px-2 overflow-y-auto overflow-x-hidden">
        <div
          onClick={handleNavigate}
          className="bg-primary-blue max-w-14 min-w-14  flex justify-center items-center text-white aspect-square rounded-lg cursor-pointer"
        >
          <FaDiscord size={35} />
        </div>
        <ServerList />
      </section>
    </div>
  );
};

export default SideBar;
