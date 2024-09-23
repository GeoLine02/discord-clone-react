import { useState } from "react";
import ChannelsList from "../channels/ChannelsList";
import Search from "../shared/Search";
import { NavLink } from "react-router-dom";
import routes from "../../constants/routes";
import { FaUserFriends } from "react-icons/fa";
import { TiRefreshOutline } from "react-icons/ti";
import { CiShop } from "react-icons/ci";
import FriendList from "../friends/FriendList";

const SideBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="flex bg-primary-gray max-w-80 py-2">
      <section className="flex flex-col items-center gap-2">
        <div className="bg-primary-blue max-w-12 min-w-12 aspect-square rounded-lg cursor-pointer"></div>
        <ChannelsList />
      </section>
      <section className="bg-secondary-gray w-full">
        <div className="border-b border-gray-600 py-1 px-2">
          <Search
            hasIcon={false}
            placeholder="Find or start a conversation"
            setSearchValue={setSearchValue}
          />
        </div>
        <section className="mt-2">
          <NavLink
            className="flex gap-3 items-center text-white w-full hover:bg-secondary-gray p-2 rounded-md active:bg-secondary-gray"
            to={routes.FRIENDS}
          >
            <FaUserFriends size={30} />
            Friends
          </NavLink>
          <NavLink
            to={routes.NITRO}
            className="flex gap-3 items-center text-white w-full hover:bg-secondary-gray p-1 active:bg-secondary-gray"
          >
            <TiRefreshOutline size={30} />
            Nitro
          </NavLink>
          <NavLink
            className="flex gap-3 items-center text-white w-full hover:bg-secondary-gray p-1 active:bg-secondary-gray"
            to={routes.SHOP}
          >
            <CiShop size={30} />
            Shop
          </NavLink>
        </section>
        <FriendList />
      </section>
    </div>
  );
};

export default SideBar;
