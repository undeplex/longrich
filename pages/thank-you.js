import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
export default function ThankYou() {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const lastOrder = JSON.parse(localStorage.getItem('lastOrder')) || null;
        if (lastOrder) {
            setOrder(lastOrder);
            localStorage.removeItem('lastOrder');
        }
    }, []);

    if (!order) return <div>Loading...</div>;

    return (
        <Layout>

        <div className="px-4">
            <h1 className="text-3xl play">Merci d'avoir commandé Chez LongrichStore</h1>
            <p className="text-lg text-gray-500 my-4">Vous pouvez contacter le service client si vous avez des questions qui concernant la livraison </p>
            <div className="order-details">
                <h2 className="text-xl">Resumé de la commande</h2>
                <p className="text-lg"><strong>Name:</strong> {order.name}</p>
                <p className="text-lg"><strong>Email:</strong> {order.email}</p>
                <p className="text-lg"><strong>Address:</strong> {order.address}</p>
                <h3 className="text-lg underline">Produits commander</h3>
                <div className="grid grid-cols-1">

                    {order.items.map((item, index) => (
                        <div key={index} className="bg-white m-3  p-4 rounded-2xl">
                            <div className="text-gray-500">CATEGORY</div>
                            <img src={`http://localhost:5000/uploads/${item.image}`} alt={item.name} width="100" className="mx-auto" />
                            <h4 className="text-xl my-2">{item.name}</h4>
                            <p className="text-2xl">${item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .order-details {
                    border: 1px solid #ddd;
                    padding: 20px;
                }
                .order-item {
                    border-top: 1px solid #ddd;
                    padding: 10px 0;
                }
            `}</style>
        </div>
        </Layout>
    );
}
