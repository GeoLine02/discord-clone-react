import { FaBars, FaDiscord } from "react-icons/fa";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const HomeHeader = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  return (
    <header className="bg-primary-blue text-white">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto p-3">
        <div className="flex gap-1">
          <FaDiscord size={30} />
          <h1 className="text-2xl font-extrabold">Discord</h1>
        </div>
        <nav>
          <ul
            className={`fixed top-0 h-screen z-50 w-[300px] md:w-auto py-3 px-6 space-y-4 md:space-y-0 md:static md:h-auto gap-6 items-center md:flex transition-all ease-in-out duration-300 bg-primary-blue
              ${!isMenuVisible ? "-right-[100%]" : "right-0"}
              `}
          >
            <IoClose
              onClick={() => setIsMenuVisible(false)}
              size={30}
              className="cursor-pointer md:hidden float-end mt-3"
            />
            <li className="cursor-pointer">Donwload</li>
            <li className="cursor-pointer">Nitro</li>
            <li className="cursor-pointer">Discover</li>
            <li className="cursor-pointer">Safety</li>
            <li className="cursor-pointer">Support</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Careers</li>
          </ul>
          <FaBars
            onClick={() => setIsMenuVisible(true)}
            className="cursor-pointer md:hidden"
            size={30}
          />
        </nav>
        {user === null ? (
          <button
            onClick={() => navigate(routes.LOGIN)}
            className="p-2 px-5 rounded-full bg-white text-black hidden md:block md:p-1 md:px-2"
          >
            Log In
          </button>
        ) : (
          <button className="p-2 rounded-full bg-white text-black hidden md:block md:p-1 md:px-2">
            Open Discord
          </button>
        )}
      </div>
    </header>
  );
};

export default HomeHeader;
