// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AdminLayout from '@/components/AdminLayout';

// function AdminPanel() {
    // const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //     // Fetch pending reviews
    //     axios.get('http://localhost:5000/admin/reviews')
    //         .then(response => setReviews(response.data.reviews))
    //         .catch(error => console.error('Failed to fetch reviews', error));
    // }, []);

    // const approveReview = (id) => {
    //     axios.patch(`http://localhost:5000/admin/reviews/approve/${id}`)
    //         .then(response => {
    //             alert('Review approved');
    //             setReviews(reviews.filter(review => review.id !== id));
    //         })
    //         .catch(error => console.error('Failed to approve review', error));
    // };

//     return (
//         <AdminLayout>

//         <div>
//             <h2>Admin Panel - Review Approval</h2>
//             <ul>
//                 {reviews.map(review => (
//                     <li key={review.id}>
//                         {review.comment} - {review.rating} stars
//                         <button onClick={() => approveReview(review.id)}>Approve</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//         </AdminLayout>
//     );
// }

// export default AdminPanel;


import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/AdminLayout';
import { BoltIcon, CalendarDaysIcon, StarIcon } from '@heroicons/react/24/solid';
import { CheckCheck, Star, Stars, Trash, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function AdminReviews() {
    const [reviews, setReviews] = useState([]);
   

    useEffect(() => {
        // Fetch pending reviews
        axios.get('http://localhost:5000/admin/reviews')
            .then(response => setReviews(response.data.reviews))
            .catch(error => console.error('Failed to fetch reviews', error));
           
    }, []);

    const approveReview = (id) => {
        axios.patch(`http://localhost:5000/admin/reviews/approve/${id}`)
            .then(response => {
                alert('Review approved');
                setReviews(reviews.filter(review => review.id !== id));
            })
            .catch(error => console.error('Failed to approve review', error));
    };
    useEffect(() => {
        // Fetch all reviews, or filter by product ID if needed
        axios.get('http://localhost:5000/reviews?approved=false')
            .then(response => setReviews(response.data))
            .catch(error => console.error('Failed to fetch reviews', error));
    }, []);
   
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/review/${id}`)
            .then(() => {
                setReviews(reviews.filter(review => review.id !== id));
            })
            .catch(error => console.error('Failed to delete review', error));
    };

    return (
        <AdminLayout>

<div class=" max-w-5xl rounded-3xl dark:bg-gray-900 dark:text-white text-gray-600 min-h-[300px] bg-gray-100 lg:p-6 p-3 mg:p-6 overflow-hidden mx-auto">
                <Link href="/">
                    <div className=" my-3 w-max bg-opacity-20 p-3 text-sm">
                    
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                </Link> 
                <div className="text-lg  mb-4 pay bg-teal-500 p-3 rounded-xl text-teal-500 bg-opacity-5">
                This does not seem to be right , you need to know what product got which review on the go and else ...
                <div className="flex items-center gap-3 mt-4 text-sm">
                
                <span className="fl  no-underline">

                <BoltIcon className="size-4 inline"/>
                Powered By 
                
                </span>
                    <img src="/freelogo-teal.svg" width="80" className=""/>
            </div>
                    </div>
                
            <ul className="grid grid-cols-1 gap-3 lg:grid-cols- md:grid-cols-2">
                {reviews.map(review => (
                    <div key={review.id} className="flex flex-col justify-between border-b-2 py-3 bg-white px-3 rounded-2xl">
                       
                       <div>
                       <p className="flex gap-2 underlin text-emerald-800 ">{review.email}
                        
                            <span className="flex text-yellow-00  items-center no-underline ">        
                            {review.rating} 
                            <StarIcon className="size-4 text-yellow-400"/>
                            
                            </span>
                         </p>
                         <p className="sm:text-sm my-2">

                         {review.comment}
                         </p>
                       </div>
                        <div className="bg-sl">
                        <div className="itece  items-center flex justify-between">

<div className="flex gap-3 text-sm sm:text my-2">
           <button className="flex  items-center bgop bg-opacity-15 gap-1 hover:bg-emerald-500 bg-emerald-400 text-emerald-500 px-2 py-1 rounded-xl" onClick={() => approveReview(review.id)}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            Approuver
           </button>

    <button onClick={() => handleDelete(review.id)}>
        <div className="bg-red-500 bg-opacity-15 text-sm  text-red-500 p-2 rounded-xl flex items-center">
            Supprimer
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
        </div>
      
    </button>
</div>

     </div>
<div className="font-bold  text-sm text-gray-600">
   
     <span className="mr-1 my-2 text-gray-500">
       
       Ecrit par {review.name}
       </span>
     <div className="text-sm my-1 ">
        <CalendarDaysIcon className="size-5 inline-block mr-1"/>Review written on:
       <span class="text-gray-700 te font-bold">{review.createdAt}</span>
    </div>
</div>
                        </div>


                       
                    </div>
                ))}
            </ul>
        </div>
        </AdminLayout>
    );
}