import { useEffect, useState } from "react";
import FriendsHeader from "../components/friends/FriendsHeader";
import AllFriendsSection from "../components/friends/AllFriendsSection";
import OnlineFriendsSection from "../components/friends/OnlineFriendsSection";
import PendingFriendsSection from "../components/friends/PendingFriendsSection";
import AddFriendSection from "../components/friends/AddFriendSection";
import FriendsSideBar from "../components/layout/FriendsSideBar";

const Channels = () => {
  const [showSection, setShowSection] = useState<string>("all");

  useEffect(() => {
    setShowSection("Online");
  }, []);
  return (
    <div className="flex max-h-screen w-full bg-secondary-gray">
      <FriendsSideBar />
      <section className="border-r-primary-gray min-h-screen bg-secondary-gray flex flex-col w-full">
        <FriendsHeader setShowSection={setShowSection} />
        <div className="flex h-full">
          {showSection === "All" && <AllFriendsSection />}
          {showSection === "Online" && <OnlineFriendsSection />}
          {showSection === "Pending" && <PendingFriendsSection />}
          {showSection === "addFriend" && <AddFriendSection />}
          <div className="border-l border-primary-gray w-2/6 h-full p-2">
            <h1 className="text-2xl font-bold text-white">Active now</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Channels;
