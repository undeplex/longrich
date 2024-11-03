import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/AdminLayout';
import Link from 'next/link';

const ViewProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(err => console.error('Failed to fetch product', err));
    }
  }, [id]);


  const handleEdit = (product) => {
    router.push(`/big/edit/${product.id}`);
  };
  if (!product) return <div>Loading...</div>;

  return (
    <AdminLayout>
      <div className=" lg:w-11/12 mx-auto gap-2 rounded-xl grid-cols-1 grid md:grid-cols-2 lg:grid-cols-2 bg-white p-6  shadow-md">
      <div className=" ">
      <Link href="/admin/free">
      <span className="underline text-sm">
        BACK TO THE PRODUCT PAGE
      </span>
      </Link>

      <h1 className="play text-2xl my-3">{product.name}</h1>
      <img src={`http://localhost:5000/uploads/${product.image}`} alt={product.name} width="240" className="mx-auto" />
      </div>
     

     <div className="bg-red-20">
     <p className="text-lg ">Ce produit coute {product.price} USD</p>
      <p className="fonlg text-lg text-gray-500">Le prix de reduction est de  {product.priceDiscount} USD</p>
      <p className="flex borde flex-wrap sm:flow-row flex-col items-center border-teal-700 gap-1 p-3 rounded-full w-max my-3">
      <span className="flex flec items-center">

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-red-400 bg-opacity-10 p-1 size-6 rounded-full text-red-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
      </svg>

        <span className="text-red-400 block text-sm">
        Category :
          
          </span> {product.category}
      </span>
        <span className="border-l-2 pl-1 flex ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-emerald-400  bg-opacity-10 p-1 size-6 rounded-full text-emerald-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
        </svg>

          
        <span className="text-emerald-400 block w-max text-sm">
        Sous-Category :
          
          </span> {product.subCategory}
          </span>
        </p>
      
      <p className="my-1 border w-max bg-opacity-5 p-3 text-sm rounded-xl">{product.name} est {product.isPopular}</p>

      
        <button onClick={() => handleEdit(product)}  className="">
    <span  className="py-3 flex  bg-emerald-500 bg-opaci text-white my-2 gap-2 w-max px-5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>


        Editer ce produit</span>
          </button>

      <h1 className="text-xl play font-bold">DESCRIPTION</h1>
      <p className="bg-purple-500 my-3 bg-opacity-5 p-4 rounded-xl">{product.description}</p>

     </div>
     <div className="">
     <h1 className="text-xl play font-bold my-3">DETAIL</h1>
        <p className="bg-blue-500 bg-opacity-5 text-sm p-4 rounded-xl">{product.detail}</p>
     </div>
        <p className="bg-blue-500 text-sm bg-opacity-5 p-4 rounded-xl">{product.description}</p>
     
      {/* Add other product details here */}
    </div>
    </AdminLayout>
  );
};

export default ViewProduct;
