/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useContext, createContext } from "react";
import { useAuth, getSocket } from "./AuthProvider";
import {
  getAllFriendRequests,
  getFriendList,
  showDMVisibleFriends,
} from "../services/friends";
import { IFriend, IFriendRequest } from "../types/friends";

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
  const [friendList, setFriendList] = useState<[] | IFriend[]>([]);
  const [onlineFrindsList, setOnlineFriendsList] = useState<any>([]);
  const [dmVisibleFrinds, setDmVisibleFriends] = useState<[] | any[]>([]);
  const { user } = useAuth();
  const socket = getSocket();
  useEffect(() => {
    if (user) {
      socket.on("get-online-friends", (onlineFriends) => {
        setOnlineFriendsList([...onlineFrindsList, onlineFriends]);
      });
    }
  }, [user]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        if (user) {
          const res = await getFriendList(user.id);
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
    socket.on("deleted-friend", (userId) => {
      const filteredFriends = friendList.filter(
        (friend: IFriend) => friend?.Friend?.id === userId
      );
      setFriendList(filteredFriends);
    });
  }, [user]);

  useEffect(() => {
    const fetchDmVisibleFrinds = async () => {
      try {
        const res = await showDMVisibleFriends(user?.id as number);
        setDmVisibleFriends(res);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      fetchDmVisibleFrinds();
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      socket.on("friend-request-accepted", (user) => {
        if (user) {
          const newFriend = {
            Friend: user,
          };

          setFriendList([...friendList, newFriend]);
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
        setDmVisibleFriends,
        dmVisibleFrinds,
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendRequestsProvider;
