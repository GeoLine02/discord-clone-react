import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.tsx";
import FriendRequestsProvider from "./context/FriendsProvider.tsx";
import ServerProvider from "./context/ServerProvider.tsx";
import ChatProvider from "./context/ChatProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <Router>
    <AuthProvider>
      <FriendRequestsProvider>
        <ChatProvider>
          <ServerProvider>
            <App />
          </ServerProvider>
        </ChatProvider>
      </FriendRequestsProvider>
    </AuthProvider>
  </Router>
);
