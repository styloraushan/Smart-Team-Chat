import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import NewChat from "./components/NewChat";
import AuthCard from "./components/AuthCard";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<ChatList />} />
          <Route path="/chat/:id" element={<ChatWindow />} />
          <Route path="/new" element={<NewChat />} />
          <Route path="/authcard" element={<AuthCard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
