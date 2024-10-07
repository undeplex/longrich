import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';

export default function ThankYou() {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const lastOrder = JSON.parse(localStorage.getItem('lastOrder'));
        if (lastOrder) {
            setOrder(lastOrder);
        }
    }, []);

    if (!order) {
        return (
            <Layout>
                <div className="p-4 text-center">
                    <h1 className="text-3xl">No recent order found</h1>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
                <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You for Your Order!</h1>
                <p className="text-gray-600 mb-4">We've received your order and will process it soon.</p>

                <h2 className="text-2xl font-semibold mb-2">Order Summary</h2>
                <ul className="mb-4">
                    {order.items.map((item, index) => (
                        <li key={index} className="p-2 border-b">
                            <strong>{item.name}</strong> - Quantity: {item.quantity}
                        </li>
                    ))}
                </ul>

                <h3 className="text-xl mb-2">Delivery Information</h3>
                <p className="mb-1"><strong>Name:</strong> {order.name}</p>
                <p className="mb-1"><strong>Email:</strong> {order.email}</p>
                <p className="mb-1"><strong>Address:</strong> {order.address}</p>

                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75l-3.75-3.75 7.5-7.5M3.75 12 9 7.5 3.75 3.75 12 12m3.75 7.5L21 15.75" />
                    </svg>
                    Your order is being processed! We will contact you soon for delivery.
                </div>
            </div>

            <style jsx>{`
                h1 {
                    color: #10B981;
                }
                ul {
                    list-style-type: none;
                    padding-left: 0;
                }
                li {
                    margin-bottom: 10px;
                }
            `}</style>
        </Layout>
    );
}
