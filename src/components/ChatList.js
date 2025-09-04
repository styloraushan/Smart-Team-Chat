import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import chats from "../data/chats";
import Header from "../components/Header"; // Import the header

const ChatList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <Header title="💬 SmartChat" search={search} setSearch={setSearch} />

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => navigate(`/chat/${chat.id}`)}
              className="flex items-center p-4 bg-white shadow-md rounded-2xl hover:shadow-lg hover:scale-[1.01] transition cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold mr-4">
                {getInitials(chat.name)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-800">{chat.name}</h2>
                  <span className="text-sm text-gray-400">{chat.time}</span>
                </div>
                <p className="text-gray-500 truncate mt-1">{chat.lastMessage}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No chats found</p>
        )}
      </div>

      {/* Floating Button */}
      <button
        onClick={() => navigate("/new")}
        className="fixed bottom-6 right-6 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        ➕ New Chat
      </button>
    </div>
  );
};

export default ChatList;
