import Search from "../shared/Search";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import FriendList from "../friends/FriendList";
import sideBarNavigation from "../../constants/sideBarNavigation";
import { useAuth } from "../../context/AuthProvider";
import SideBarTools from "../shared/SideBarTools";
import { FaDiscord } from "react-icons/fa";

const FriendsSideBar = () => {
  const [, setSearchValue] = useState<string>("");

  const { user } = useAuth();

  return (
    <div className="flex bg-primary-gray min-w-64 max-w-80 relative">
      <section className="bg-accent-gray w-full">
        <div className="border-b border-gray-600 py-1 px-2">
          <Search
            placeholder="Find or start a conversation"
            setSearchValue={setSearchValue}
          />
        </div>
        {sideBarNavigation.map((el) => (
          <NavLink
            key={el.title}
            className="flex gap-3 items-center text-white w-full hover:bg-secondary-gray p-2 rounded-md active:bg-secondary-gray"
            to={el.path}
          >
            <el.icon size={30} color="white" />
            {el.title}
          </NavLink>
        ))}
        <FriendList />
        <footer className="bg-primary-gray py-2 px-2 flex justify-between absolute bottom-0 right-0 w-full">
          {/* profile */}
          <div className="flex gap-1 rounded-md hover:bg-hover-gray cursor-pointer items-center p-1">
            <div className="bg-pink-500 min-w-9 h-9 aspect-square rounded-full text-white flex items-center justify-center">
              <FaDiscord size={25} />
            </div>
            <div className="text-sm text-white">
              <h1>{user?.username}</h1>
              <h2>Online</h2>
            </div>
          </div>
          <SideBarTools />
        </footer>
      </section>
    </div>
  );
};

export default FriendsSideBar;
