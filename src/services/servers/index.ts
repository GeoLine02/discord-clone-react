import api from "../../config/axios";

export const getServersByOnwer = async (ownerId: number) => {
  try {
    const res = await api.get(`/server/by-owner?ownerId=${ownerId}`, {
      headers: { "Content-Type": "application/json" },
    });

    if (res.data && res.status === 200) {
      return res.data;
    }

    if (res.status === 404) {
      return res.data.message;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getServers = async (userId: number) => {
  try {
    const res = await api.get(`/server?userId=${userId}`, {
      headers: { "Content-Type": "application/json" },
    });
    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getServerById = async (serverId: number) => {
  try {
    const res = await api.get(`/server/by-name?serverId=${serverId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createServer = async (
  serverTemplate: string,
  serverCommunity: string,
  serverName: string,
  ownerId: number,
  serverImage: string | undefined
) => {
  try {
    const res = await api.post(
      "/server/create",
      { serverTemplate, serverCommunity, serverName, ownerId, serverImage },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res.data.message;
  } catch (error) {
    console.log(error);
  }
};

export const joinServerByUrl = async (userId: number, serverUrl: string) => {
  try {
    const res = await api.post(
      "/server/join-by-url",
      { userId, serverUrl },
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

export const joinServerByRequest = async (
  senderId: number,
  receiverId: number,
  serverId: number
) => {
  try {
    const res = await api.post(
      "/server/join-by-request",
      { senderId, receiverId, serverId },
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

export const getServerRequests = async (userId: number) => {
  try {
    const res = await api.get(`/server/requests?userId=${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
