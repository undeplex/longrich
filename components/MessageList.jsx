import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from './AdminLayout';

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const response = await axios.get('http://localhost:5000/admin/messages');
    setMessages(response.data);
  };

  const deleteMessage = async (id) => {
    await axios.delete(`http://localhost:5000/admin/messages/${id}`);
    fetchMessages(); // Rafraîchir la liste des messages après suppression
  };

  const markAsRead = async (id) => {
    const response = await axios.patch(`http://localhost:5000/admin/messages/${id}/read`);
    setMessages(messages.map(msg => msg.id === id ? response.data : msg));
  };

  const openModal = (message) => {
    setSelectedMessage(message);
    setShowModal(true);
    if (!message.isRead) {
      markAsRead(message.id);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedMessage(null);
  };

  const unreadCount = messages.filter(message => !message.isRead).length;

  return (
    <AdminLayout>

    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Messages</h1>
        <div className="relative">
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {unreadCount}
            </span>
          )}
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Messages Non Lus</button>
        </div>
      </div>

      <ul className="space-y-4">
        {messages.map((message) => (
          <li key={message.id} className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center">
              <p className={`text-gray-800 ${message.isRead ? 'text-gray-500' : 'font-bold'}`}>
                {message.message}
              </p>
              <div>
                <button
                  onClick={() => openModal(message)}
                  className="mr-2 px-4 py-2 bg-green-500 text-white rounded"
                >
                  Voir
                </button>
                <button
                  onClick={() => deleteMessage(message.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {showModal && selectedMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Message</h2>
            <p className="text-gray-700 mb-4">{selectedMessage.message}</p>
            <button onClick={closeModal} className="px-4 py-2 bg-blue-500 text-white rounded">
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
    </AdminLayout>
  );
};

export default MessageList;