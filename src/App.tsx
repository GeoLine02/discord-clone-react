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
function App() {
  axios.defaults.withCredentials = true;

  return (
    <>
      <SideBar />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route index element={<Channels />} path={routes.CHANNEL} />
        </Route>
        <Route element={<Home />} path={routes.HOME} />
        <Route element={<Register />} path={routes.REGISTER} />
        <Route element={<Login />} path={routes.LOGIN} />
      </Routes>
    </>
  );
}

export default App;
