import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { LuSend } from "react-icons/lu";

const Chatbot = ({ open, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "I'm still learning! But I'll try my best to help.",
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  if (!open) return null; // Prevent rendering when closed

  return (
    <div className="fixed bottom-20 right-4 w-80 bg-white shadow-lg rounded-xl border border-[#8C52FF] transition-all duration-300 z-50">
      {/* Chat Header */}
      <div className="bg-[#8C52FF] text-white px-4 py-2 flex justify-between items-center rounded-t-xl">
        <span className="font-semibold font-Sora">AccomX Chatbot</span>
        <button onClick={onClose} className="p-1">
          <LiaTimesSolid className="size-5" />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="p-3 h-64 overflow-y-auto flex flex-col gap-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-xl text-sm max-w-[75%] ${
                msg.sender === "user"
                  ? "bg-[#8C52FF] text-white self-end"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="border-t flex items-center p-2 bg-gray-50 rounded-b-xl">
        <input
          type="text"
          className="flex-1 border rounded-xl px-3 py-1 focus:outline-none text-sm"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          className="ml-2 bg-[#8C52FF] text-white p-2 rounded-full"
          onClick={handleSendMessage}
        >
          <LuSend className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
