import api from "../../config/axios";

export const getDirectMessages = async (
  senderId: number,
  receiverId: number
) => {
  try {
    const res = await api.get(
      `/messages/direct-messages?senderId=${senderId}&receiverId=${receiverId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getChannelMessages = async (
  serverId: number,
  channelName: string
) => {
  try {
    const res = await api.get(
      `/messages/channel-messages?serverId=${serverId}&channelName=${channelName}`
    );
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
