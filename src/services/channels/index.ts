import api from "../../config/axios";

export const getChannelMessages = async (
  serverId: number,
  channelname: string
) => {
  try {
    const res = await api.get(
      `/channels/messages?serverId=${serverId}&channelName=${channelname}`
    );

    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
