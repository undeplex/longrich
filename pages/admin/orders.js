import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/AdminLayout';

export default function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('https://express-xzfm.onrender.com/orders');
            setOrders(response.data);
        } catch (error) {
            console.error('Failed to fetch orders', error);
        }
    };

    const handleDeleteOrder = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/orders/${id}`);
            setOrders(orders.filter(order => order.id !== id));
        } catch (error) {
            console.error('Failed to delete order', error);
        }
    };

    return (
        <AdminLayout>

<div className="bg-gray- bg-gray-100 relative rounded-xl p-4 mx-auto lg:w-11/12">

                
                <div className="grid grid-cols-1 object-center center place-items-   w-max mx-auto  lg:grid-cols-3 gap-4 md:grid-cols-2">
                    {orders.map(order => (
                        <div key={order.id} class="bg-white p-4 max-w-[340px] h-max rounded-2xl shadow-sm my-3">

                            <div class="text-left  ">
                                
                                    <span className="flex items-center gap-1 text-gray-600 font-bold my-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>

                                        {order.email}</span>
                                    <div className="mb-2 flex items-center gap-1">
                                    <div className="p-2 w-max bg-emerald-600 bg-opacity-15 rounded-xl">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 text-emerald-700 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                    </div>
                                    <div>
                                    Order ref : 
                                        <span className="font-bold ml-1">
                                        BLC000{order.id}</span>

                                    </div>
                                    </div>
                                    <ul className="space-y-2 my-3">
                                    {order.items.map((item, index) => (
                                        <li key={index} className="text-gray-500 list-inside sp space-y-2 ">{item.name} (${item.price})</li>
                                    ))}
                                </ul>
                            </div>
                                <button onClick={() => handleDeleteOrder(order.id)}  class="text- py-2 text-red-500 px-2 mt-2 bg-red-500 bg-opacity-15  w-max p-1 rounded-[7px]">                         
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
     supprimer 
                            
                                </button>
                                <div className="text-sm text-gray-400 mt-3 ml-2">Commander il y'a {order.id} heures</div>
                        </div>
                    ))}
                </div>
          
            
        </div>
        </AdminLayout>
    );
}
