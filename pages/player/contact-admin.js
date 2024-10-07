// pages/contact-admin.js
import { useState } from 'react';
import axios from 'axios';
import Layout from '@/components/Layout';
import { Home } from 'lucide-react';
import { BoltIcon } from '@heroicons/react/24/solid';

export default function ContactAdmin() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/admin/messages', formData);
            alert('Message sent to admin!');
            setFormData({ name: '', email: '', message: '' }); // Reset form
        } catch (error) {
            console.error('Failed to send message', error);
            alert('Failed to send message');
        }
    };

    return (
        <Layout>
            <div className="px-3  max-w-4xl mx-auto">
            <h1 className="text-4xl  mb-4 play font-bold break-words">
                Get in touch with us               
            </h1>
            <div className="grid mx-auto gap-3 grid-cols-1 sm:grid-cols-2 maxw wm w-max">

            <p className="text-sm mb-4 max-w-[350px] bg-orange-500 bg-opacity-10 p-4 rounded-2xl">
                <span className="  text-orange-600 justify-between underline  mb-1 flex ">
                NOTICE
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6  text-orange-600  inline">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                </span>

                Mis a part les informations de contact donner sur cette page
                <a href="/" className="underline"> Longrichstore by Caleb </a> ne 
                possede pas d'autres comptes, donc n'utiliser que ces dernieres pour nous faire part de 
                votre merci, MERCI !!!s
            </p>
            <div className="text-xl max-w-[340px]  mb-4 pay bg-red-500 p-3 rounded-xl text-red-500 bg-opacity-5">
                oups 404 !!<br/>
                Social media goes_here ,though for now we can't tap into some icon package or whatever ...
                <div className="flex items-center gap-3 mt-4 text-sm">
                
                <span className="fl  no-underline">

                <BoltIcon className="size-4 inline"/>
                Powered By 
                
                </span>
                    <img src="/freelogo-red.svg" width="80" className=""/>
            </div>
            </div>
            </div>
           
              <div className="max-w-4xl p-5   mx-auto bg-white my-3 rounded-3xl">
                <div className="h1 play text-2xl font-bold">
                </div>
                <div className=" text-gray-700 font-bold text-lg space-y-2 mt-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-10 rounded-full rotate-12 bg-indigo-500 bg-opacity-10 p-2 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>+243 990-664-406
                </div>
                <div className=" text-gray-700 font-bold text-lg space-y-2 mt-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-10 rounded-full -rotate-12 bg-indigo-500 bg-opacity-10 p-2 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>Lubumbashi c.Annexe Q.Belair 

                </div>

                <div className=" underline underline-offset-2 font-bold text-gray-700 text-lg mt-2 space-y-2 items- break-words">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-10 rounded-full rotate-12 bg-indigo-800 bg-opacity-10 p-2 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                LongrichStore@gmail.com
                </div>

            <h1 className="text-2xl font-bold my-5">Contact Admin</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
             <div className="flex t items-center text-s border-b border-gray-300 ">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className=" w-full px-3 py-2 bg-transparent"
                        required
                        placeholder="Nom complet"
                    />
                </div>
                <div className="flex t items-center text-s border-b border-gray-300 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className=" w-full px-3 py-2 bg-transparent"
                        required
                        placeholder="john@email.com"

                    />
                </div>
                <div className="border  rounded-xl border-gray-300 ">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className=" w-full px-3 py-2 bg-transparent"
                        required
                        placeholder="votre message"
                    ></textarea>
                </div>
                <button type="submit" className="flex left-1/2 items-center 3 mx-auto w-max zi z-50  bg-gradient-to-bl to-emerald-500 from-indigo-400 text-white px-3 py-4 rounded-xl gap-2">
                           Envoyer ce message
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                </button>           
            </form>
        </div>
            </div>
          
        </Layout>
      
    );
}