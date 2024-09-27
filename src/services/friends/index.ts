import api from "../../config/axios";

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
