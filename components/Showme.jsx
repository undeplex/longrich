import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
export default function Showme() {
  const [clothingProducts, setClothingProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products.json'); // Fetch the mock JSON file
        // Filter products by the "Clothing" category
        const clothing = response.data.filter(product => product.category === 'hygiene');
        setClothingProducts(clothing);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {clothingProducts.length > 0 ? (
        <ul>
          {clothingProducts.map((product) => (
            <div key={product.id} className="bg-yellow-30 flex flex-col justify-between  mx-2 my-2 rounded-xl      max-w-[210px]">
                       
                    
                    
            <Link href={`/product/${product.id}`}>
            <div className="">
                    <div className="bg-white grid place-content-center lg:size-[195px] lg:py-2 py-6 rounded-2xl ">
                        <img className="lg:size-[134px] mx-auto  md:size-[120px] size-[100px] object-cover " src={`/uploads/${product.image}`} alt={product.name} width="20" />
                    </div>
                    <h2 className="break-words font-bold text- mt-1 ">
                        {product.name} Longrich
                    </h2>
                    <div className="text-sm my-1 text-gray-500">HYGIENE</div>
                    <div className="flex items-center  my-1 w-max justify-between">
                            <p className="text-[19px]   text-gray-900 whitespace-break-  break-words">
                            USD${product.price}      
                            <span className="line-through hidden sm:block text-[12px] text-gray-700 italic ml-2">USD ${product.priceDiscount}</span>
                            </p>
                    </div>
            </div>
            </Link> 
            <div className="flex flex-col ">
                <div className="flex justify-between px-3">
                    
                    <button className="border border-gray-100 p-3 rounded-full bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                    <button className="border p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                </div> 
                
                                        
                {/* {product.category == "soins corporel" && <div className="bg-purple-500 px-4 w-max py-1 my-2 text-center text-[12px]  rounded-full bg-opacity-15 text-purple-500">{product.category}</div>}
                {product.category == "hygiene" && <div className="bg-blue-500 px-4 w-max py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-blue-500">{product.category}</div>}
                {product.category == "lotion" && <div className="bg-yellow-500 px-4 w-full py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-yellow-500">{product.category}</div>}
                {product.category == "immunite" && <div className="bg-teal-500 px-4 w-max py-1 my-2 text-center rounded-full  text-[12px] bg-opacity-15 text-teal-500">{product.category}</div>}
                {product.category == "nutrition" && <div className="bg-indigo-500 px-4 w-max py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-indigo-500">{product.category}</div>}
                {product.category == "" && <div className="bg-red-500 px-4 w-max py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-red-500">unavailable!</div>}
                {product.category !== `lotion`  && <div className="bg-red-500 w-full px-4  py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-red-500">unavailable!</div>} */}
            </div>



      
      </div>
          ))}
        </ul>
      ) : (
        <p>No clothing products found.</p>
      )}
    </div>
  );
}
