import { useState } from "react";
import { LuSend } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import { User } from "../svgs";
import message from "../ui/SVG/message.svg";
import { Image } from "../ui";
const users = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Michael Smith" },
  { id: 3, name: "Sophia Williams" },
  { id: 4, name: "David Brown" },
];

const Messaging = () => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [messages, setMessages] = useState<
    Record<number, { text: string; sender: string }[]>
  >({});
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim() || !selectedUser) return;

    setMessages((prev) => ({
      ...prev,
      [selectedUser]: [
        ...(prev[selectedUser] || []),
        { text: input, sender: "user" },
      ],
    }));
    setInput("");

    setTimeout(() => {
      setMessages((prev) => ({
        ...prev,
        [selectedUser]: [
          ...(prev[selectedUser] || []),
          {
            text: "I'm still learning! But I'll try my best to help.",
            sender: "bot",
          },
        ],
      }));
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-[#1A1A1A] text-white p-6">
        <h2 className="text-lg font-semibold mb-4">Chats</h2>
        <div className="flex flex-col gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300
                hover:bg-[#444] ${
                  selectedUser === user.id ? "bg-[#8C52FF]" : "bg-[#333]"
                }`}
              onClick={() => setSelectedUser(user.id)}
            >
              <User className="text-xl" />
              <span className="text-sm">{user.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col bg-white h-full shadow-md">
        {selectedUser ? (
          <>
            {/* Chat Header */}
            <div className="bg-[#8C52FF] text-white p-4 flex justify-between">
              <span className="font-semibold text-lg font-Sora">
                {users.find((u) => u.id === selectedUser)?.name}
              </span>
              <button onClick={() => setSelectedUser(null)}>
                <LiaTimesSolid className="size-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4">
              {(messages[selectedUser] || []).map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  } mb-2`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg text-sm max-w-xs ${
                      msg.sender === "user"
                        ? "bg-[#8C52FF] text-white"
                        : "bg-gray-300 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Field */}
            <div className="border-t p-3 bg-gray-50 flex items-center sticky bottom-0">
              <input
                type="text"
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none text-sm"
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
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-600">
            <div className=" flex items-center">
              <Image src={message} className=" size-64" />
            </div>
            <h2 className="text-xl font-semibold">
              Select a chat to start messaging
            </h2>
            <p className="text-sm">
              Click on a user from the left panel to begin chatting.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messaging;
