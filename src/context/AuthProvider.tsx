import {
  useState,
  useEffect,
  useLayoutEffect,
  createContext,
  useContext,
} from "react";
import api from "../config/axios";
import { io, Socket } from "socket.io-client";
import { IUser } from "../types/user";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { logout } from "../services/users";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthContext = createContext<any>(undefined);
// eslint-disable-next-line react-refresh/only-export-components
// export const socket = io(import.meta.env.VITE_APP_API_BASE_URL);
let socket: Socket<DefaultEventsMap, DefaultEventsMap>;
export const getSocket = () => {
  if (!socket) {
    socket = io(import.meta.env.VITE_APP_API_BASE_URL);
  }
  return socket;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return authContext;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<undefined | null | string>();
  const [user, setUser] = useState<null | IUser>(null);
  console.log(user);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/user");

        setToken(response.data.accessToken);
        setUser(response.data.user);

        if (response.data.user) {
          socket.emit("register", response.data.user.username);
        }
      } catch {
        setToken(null);
      }
    };
    fetchUser();

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  useLayoutEffect(() => {
    const authInterceport = api.interceptors.request.use((config) => {
      config.headers.Authorization =
        !config._retry && token
          ? `Bearer ${token}`
          : config.headers.Authorization;

      return config;
    });

    return () => {
      api.interceptors.request.eject(authInterceport);
    };
  }, [token]);

  useLayoutEffect(() => {
    const refreshInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (
          error.response.status === 403 &&
          error.response.data.message === "Unauthorized"
        ) {
          try {
            const response = await api.get("/user/refreshToken");
            setToken(response.data.accessToken);

            originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
            originalRequest._retry = true;

            return api(originalRequest);
          } catch {
            setToken(null);
          }
        }
      }
    );

    return () => {
      api.interceptors.response.eject(refreshInterceptor);
    };
  }, [token]);

  const logOut = async () => {
    try {
      const res = await logout();

      if (res) {
        console.log("enters");
        setToken(null);
        setUser(null);
        if (socket) {
          socket.disconnect();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      socket.disconnect();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ setToken, token, user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
