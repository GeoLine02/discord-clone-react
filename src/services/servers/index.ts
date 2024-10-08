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

export const getServerByName = async (serverName: string) => {
  try {
    const res = await api.get(`/server/by-name?serverName=${serverName}`, {
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
