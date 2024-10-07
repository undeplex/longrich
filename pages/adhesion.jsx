import React from 'react'
import Layout from '@/components/Layout'
import { Home } from 'lucide-react'
import { useState } from 'react';
import axios from 'axios';
import CloneHome from '@/components/CloneHome';
import Stable from '@/components/Stable';
import { ArrowLongDownIcon } from '@heroicons/react/24/solid';
export default function Adhesion() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            await axios.post('http://localhost:5000/community/join', formData);
            alert('Joined the community!');
            setFormData({ name: '', email: '' }); // Reset form
        } catch (error) {
            console.error('Failed to join community', error);
            alert('Failed to join community');
        }
    };

  return (
    <Layout>
        <div className="max-w-5xl mx-auto overflow-hidden px-3">
            <div className="grid gap-7 py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center">
                <div className=" relative max-w-[400px] p-4 bg-white rounded-xl">
                    <div className="text-3xl md:text-4xl play"><span className="rotate-[15deg] text-gray-400 border p-4 inline-block">1</span> s'inscrire</div>
                    <div className="text-l my-3 lay text-gray-600">
                        A partir d'un distributeur Local de votre pays ,
                        vous pouvez remplir un formulaire d'inscription qui vous permettra de meme de prendre connaissance  de Longrich
                    </div>
                    <div>
                        <div className=" text-gray-500 flex justify-between">
                            Voir plus de detail 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                    <ArrowLongDownIcon className="size-10 block absolute right-1/2 animate- -1 -bottom-5 text-gray-600"/>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 block absolute -right-4 animate- -1 top-1/2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg> */}
                </div>
                <div className=" relative max-w-[400px] p-4 bg-white rounded-xl">
                    <div className="text-3xl md:text-4xl play"><span className="rotate-[15deg] textxl text-indigo-400 border border-indigo-400 p-4 inline-block">2</span> Explorer nos produits</div>
                    <div className="text-l my-3 lay text-gray-600">
                        Decouvrez notre gamme de produits et choisissez ceux qui fit vos preferences ,et les utiliser pour vos 
                        distributions
                    </div>
                    <div>
                      
                    </div>
                    <ArrowLongDownIcon className="size-10 block absolute right-1/2 animate- -1 -bottom-5 text-gray-600"/>

                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 block absolute -right-4 animate- -1 top-1/2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg> */}
                </div>
                <div className=" relative max-w-[400px] p-4 bg-white rounded-xl">
                    <div className="text-3xl md:text-4xl play text-center"><span className="rotate-[15deg] text-orange-400 border border-orange-400 p-4 inline-block">3</span> Formation Initiale</div>
                    <div className="text-l my-3 lay text-gray-600 break-al">
                        Suivez notre formation pour comprendre le fonctionnement de longrich
                         et apprendre les meilleures pratiques pour reussir
                    </div>
                    <div>
                    <ArrowLongDownIcon className="size-10 block absolute right-1/2 animate- -1 -bottom-5 text-gray-600"/>

                    </div>
                   
                </div>
            </div>
            <CloneHome/>
            <h1 className="play grid place-content-center text-center -[300px] text-4xl">
                Type de Membership Goes here
            </h1>


           <Stable>
            <span className="text-5xl play">

            Main the problem is not you trying to be all the way grounded to the handleProceed ToPaymentas we need
            to be on top of the situationship killing people from the light 
            </span>
           </Stable>
          
        </div>
    </Layout>
  )
}
