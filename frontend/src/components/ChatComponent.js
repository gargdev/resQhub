import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const ChatComponent = ({ agency }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('joinRoom', agency._id);

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.emit('leaveRoom', agency._id);
    };
  }, [agency._id]);

  const sendMessage = () => {
    if (message) {
      socket.emit('message', { room: agency._id, message });
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage('');
    }
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-2">Chat with {agency.name}</h2>
      <div className="mb-4 h-64 overflow-y-scroll border p-2">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2 p-2 border-b">
            {msg}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 p-2 bg-blue-500 text-white rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
