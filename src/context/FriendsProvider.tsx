/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useContext, createContext } from "react";
import { useAuth, socket } from "./AuthProvider";
import { getAllFriendRequests, getFriendList } from "../services/friends";
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
  const [friendList, setFriendList] = useState<any>([]);
  const [onlineFrindsList, setOnlineFriendsList] = useState<any>([]);

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      socket.on("get-online-friends", (onlineFriends) => {
        setOnlineFriendsList((prev) => [...prev, onlineFriends]);
      });
    }
  }, [user]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        if (user) {
          const res = await getFriendList(user.id);
          // console.log(res);
          setFriendList(res);
          return res;
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchFriends();
  }, [user]);

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
        (Sender, senderUsername, receiverUsername, senderId, status) => {
          if (senderUsername && senderId) {
            const request: IFriendRequest = {
              Sender,
              senderId,
              status,
            };
            setFriendRequests((prev: IFriendRequest[]) => [...prev, request]);
          }
        }
      );
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      socket.on("friend-request-accepted", (user) => {
        if (user) {
          setFriendList((prev) => [...prev, user]);
        }
      });
    }
  }, [user]);

  return (
    <FriendsContext.Provider
      value={{
        friendRequests,
        friendList,
        setFriendList,
        setFriendRequests,
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendRequestsProvider;
