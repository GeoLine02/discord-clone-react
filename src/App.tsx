import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./constants/routes";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import Channels from "./pages/Channels";
import ProtectedRoute from "./guard/PrivateRoute";
import SideBar from "./components/layout/SideBar";
import Header from "./components/layout/Header";
import ServerByName from "./pages/ServerByName";
import FriendById from "./pages/FriendById";
import ChannelMessagesPage from "./pages/ChannelMessagesPage";
function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="flex max-w-[100vw] max-h-[100vh]">
      <SideBar />
      <div className="w-full">
        <Header />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route element={<Channels />} path={routes.CHANNEL} />
            <Route
              element={<ServerByName />}
              path={`${routes.CHANNEL}/:serverId`}
            >
              <Route
                element={<ChannelMessagesPage />}
                path=":text/:channelName"
              />
            </Route>
            <Route
              element={<FriendById />}
              path={`${routes.CHANNEL}/friend-id/:id`}
            />
          </Route>
          <Route element={<Home />} path={routes.HOME} />
          <Route element={<Register />} path={routes.REGISTER} />
          <Route element={<Login />} path={routes.LOGIN} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
