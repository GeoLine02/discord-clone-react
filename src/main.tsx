import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.tsx";
import FriendRequestsProvider from "./context/FriendsProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <Router>
    <AuthProvider>
      <FriendRequestsProvider>
        <App />
      </FriendRequestsProvider>
    </AuthProvider>
  </Router>
);
