import React, { useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import chats from "../data/chats";

const ChatWindow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chat = chats.find((c) => c.id === Number(id));
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState(chat ? chat.messages : []);
  const [newMessage, setNewMessage] = useState("");
  const [summary, setSummary] = useState(null);
  const [isOnline, setIsOnline] = useState(Math.random() > 0.5); // Random online status
  const [lastSeen, setLastSeen] = useState(
    new Date(Date.now() - Math.random() * 600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!chat) return <p className="p-4">Chat not found!</p>;

  // Add a new message
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    const updatedMessages = [
      ...messages,
      { sender: "You", text: newMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
    ];
    setMessages(updatedMessages);
    setNewMessage("");
  };

  // Summarize the chat
  const handleSummarize = () => {
    setSummary(
      `📝 Summary: You and ${chat.name} discussed key updates, progress, and next steps. ✅`
    );
  };

  // Smart Reply Suggestion
  const handleSmartReply = () => {
    const reply = "💡 Got it! I’ll handle this right away. 👍";
    setMessages([
      ...messages,
      { sender: "You", text: reply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
    ]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 shadow-md bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <button onClick={() => navigate("/")} className="font-semibold">
          ← Back
        </button>
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center font-bold">
            {chat.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <h1 className="text-lg font-bold">{chat.name}</h1>
            <p className="text-sm text-gray-200">
              {isOnline ? "🟢 Online" : `Last seen at ${lastSeen}`}
            </p>
          </div>
        </div>
        <div></div>
      </div>

      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-100">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-3 rounded-2xl max-w-xs ${
                msg.sender === "You" ? "bg-blue-500 text-white" : "bg-white shadow"
              }`}
            >
              <p>{msg.text}</p>
              <span className="block text-xs mt-1 text-gray-300">{msg.time}</span>
            </div>
          </div>
        ))}
        {summary && (
          <div className="flex justify-center">
            <div className="bg-yellow-100 text-gray-800 p-3 rounded-lg text-sm shadow">
              {summary}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* AI Feature Buttons */}
      <div className="p-4 flex gap-4 bg-white shadow-inner">
        <button
          onClick={handleSummarize}
          className="bg-green-500 text-white px-4 py-2 rounded-xl shadow hover:bg-green-600"
        >
          Summarize Thread
        </button>
        <button
          onClick={handleSmartReply}
          className="bg-purple-500 text-white px-4 py-2 rounded-xl shadow hover:bg-purple-600"
        >
          Smart Reply Suggestion
        </button>
      </div>

      {/* Message Input */}
      <div className="p-4 flex gap-2 bg-white shadow-inner">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-none"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
