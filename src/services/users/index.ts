import {
  IUserLoginCrdentials,
  IUserRegisterCredentials,
} from "../../types/user";
import api from "../../config/axios";

export const authorizeUser = async (userCredentials: IUserLoginCrdentials) => {
  try {
    const resp = await api.post("/user/authorize", userCredentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resp.data.accessToken;
  } catch (error) {
    console.log(error);
  }
};

export const reigsterUser = async (
  userCredentials: IUserRegisterCredentials
) => {
  try {
    const resp = await api.post("/user/create", userCredentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(resp);
    return resp.data.message;
  } catch (error) {
    console.log(error);
  }
};
