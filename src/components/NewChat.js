import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import chats from "../data/chats"; // Import chats to search

const NewChat = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [search, setSearch] = useState("");

    const handleStartChat = () => {
        if (!name.trim()) {
            alert("⚠️ Please enter a participant name!");
            return;
        }
        alert(`✅ Chat started with ${name}!`);
        navigate("/"); // Return to Chat List
    };

    const handleIcebreaker = () => {
        alert("💬 Icebreaker: 'Hey! How’s your day going so far? 😊'");
    };

    // 🔍 Filter chats for search
    const filteredChats = chats.filter((chat) =>
        chat.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Global Header */}
            <Header title="💬 SmartChat
" search={search} setSearch={setSearch} />

            {/* Search Results */}
            {search && (
                <div className="bg-white shadow-md mx-4 mt-2 rounded-xl p-2">
                    {filteredChats.length > 0 ? (
                        filteredChats.map((chat) => (
                            <div
                                key={chat.id}
                                onClick={() => navigate(`/chat/${chat.id}`)}
                                className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
                            >
                                {chat.name}
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 p-3">No users found</p>
                    )}
                </div>
            )}

            {/* Centered Card */}
            <div className="flex flex-1 items-center justify-center p-4">
                <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate("/")}
                        className="text-blue-500 mb-6 font-medium hover:underline"
                    >
                        ← Back
                    </button>

                    {/* Title */}
                    <h1 className="text-2xl font-bold mb-6 text-center">
                        Start a New Chat
                    </h1>

                    {/* Input */}
                    <input
                        type="text"
                        placeholder="Enter participant name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    {/* Start Chat Button */}
                    <button
                        onClick={handleStartChat}
                        className="w-full bg-blue-500 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-600 transition"
                    >
                        Start Chat
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-3 text-gray-400">or</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    {/* AI Icebreaker */}
                    <button
                        onClick={handleIcebreaker}
                        className="w-full bg-orange-500 text-white px-6 py-3 rounded-xl shadow hover:bg-orange-600 transition"
                    >
                        🤖 Generate Icebreaker
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewChat;
