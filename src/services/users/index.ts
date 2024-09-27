import {
  IUserLoginCrdentials,
  IUserRegisterCredentials,
} from "../../types/user";
import api from "../../config/axios";
import axios from "axios";

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

    if (resp) {
      // this response logs undefined if user uses aleady used email
      return resp;
    }
  } catch (error: any) {
    console.log(error);
  }
};
