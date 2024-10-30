import api from "../../config/axios";

export const getFriendList = async (userId: number) => {
  try {
    const res = await api.get(`friend?userId=${userId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllFriendRequests = async (userId: number) => {
  try {
    const res = await api.get(`friend/friend-request/get?userId=${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.friendRequests;
  } catch (error) {
    console.log(error);
  }
};

export const sendFrindRequest = async (senderId: number, username: string) => {
  try {
    const res = await api.post(
      "friend/friend-request/send",
      {
        senderId,
        username,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const acceptFriendRequest = async (
  senderId: number,
  receiverId: number
) => {
  try {
    const res = await api.post(
      "friend/friend-request/accept",
      { senderId, receiverId },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const rejectFriendRequest = async (
  senderId: number,
  receiverId: number
) => {
  try {
    const res = await api.delete("friend/friend-request/reject", {
      params: { senderId, receiverId },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const showDMVisibleFriends = async (userId: number) => {
  try {
    const res = await api.get(`friend/dm-visible-friends?userId=${userId}`);
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateFriendDmVisibility = async (params: {
  userId: number;
  friendId: number;
  visibility: boolean;
}) => {
  try {
    const res = await api.patch("/friend/dm-visible-friends/update", params, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
