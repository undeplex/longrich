import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/AdminLayout';
import Link from 'next/link';

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [communityMembers, setCommunityMembers] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/admin/messages');
        setMessages(data);
      } catch (error) {
        console.error('Failed to fetch messages', error);
      }
    };

    const fetchCommunityMembers = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/community/members');
        setCommunityMembers(data);
      } catch (error) {
        console.error('Failed to fetch community members', error);
      }
    };

    fetchMessages();
    fetchCommunityMembers();
  }, []);

  return (
    <AdminLayout>
         <div className="max-w-4xl mx-auto bg-gray-100 px-4 py-5 rounded-xl shadow-md">
         <Link href="/admin">
        <div className="underline w-max bg-opacity-20">
          Go back Home
        </div>
      </Link>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          Messages <span className="size-2 bg-emerald-500 rounded-full inline-block"></span>

        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
          {messages.map(message => (
            <div key={message.id} className="flex flex-col justify-between relative py-4 bg-white  p-3 bg-opacity0   rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl h-ma">
             
              <div className="flex  items-center justify-between">
              <div className="font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 sm:w-7 inline">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
                {message.name} 
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 text-red-400 rounded-xl bg-red-500 bg-opacity-10 p-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>

           
              <p className="my-2 text-gray-500 p-2">{message.message}</p>
              <div className="flex justify-between flex-wrap">
              <div className=" text-gray-600 ">From {message.email}</div>
              <p className="text-sm ">Recu il y'a {message.id} heure </p>

              </div>
            <div className="absolute top-2 left-2 -trans size-2 rounded-full  bg-red-500"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Community Members</h2>
        <ul>
          {communityMembers.map(member => (
            <li key={member.id} className="border-b py-4">
              <div className="font-bold">{member.name}</div>
              <div className="text-gray-500">{member.email}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </AdminLayout>
   
  );
}