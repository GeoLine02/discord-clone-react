/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useContext, createContext } from "react";
import { useAuth, socket } from "./AuthProvider";
import { getAllFriendRequests } from "../services/friends";
import { IFriendRequest } from "../types/friends";

const FriendsContext = createContext<any>(undefined);

export const useFriendRequests = () => {
  const friendsContext = useContext(FriendsContext);

  if (!friendsContext) {
    throw new Error("useFriends must be used within a FriendsProvider");
  }
  return friendsContext;
};

const FriendRequestsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [friendRequests, setFriendRequests] = useState<any>([]);
  console.log(friendRequests);
  const { user } = useAuth();

  useEffect(() => {
    const fetchAllFriendRequests = async () => {
      const res = await getAllFriendRequests(user.id);
      setFriendRequests(res);
    };
    if (user) {
      fetchAllFriendRequests();
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      socket.on(
        "receive-friend-request",
        (senderUsername, receiverUsername, senderId, status) => {
          if (senderUsername && senderId) {
            const request: IFriendRequest = {
              Sender: { username: senderUsername },
              senderId,
              status,
            };
            setFriendRequests((prev: IFriendRequest[]) => [...prev, request]);
          }
        }
      );
    }
  }, [user]);

  return (
    <FriendsContext.Provider value={{ friendRequests }}>
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendRequestsProvider;
