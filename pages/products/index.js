import { useState, useEffect,useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { Home } from 'lucide-react';
import { SearchIcon,Settings2Icon, PlusIcon, Settings, ToggleLeftIcon, Activity, Dot } from 'lucide-react';
import Stable from '@/components/Stable';
import TextSwitcher from '@/components/TextSwitcher';


export default function Products() {


    const [toggleStyle, setToggleStyle]= useState(false);
    const [toggleMaster, setToggleMaster]= useState(false);
 
    const [showPopup, setShowPopup] = useState(false);
 
 
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
 
   const [products, setProducts] = useState([]);
     const [form, setForm] = useState({ id: '', name: '', price: '', priceDiscount: '', detail: '', description: '', keywordSearch: '', category: '', image: null, existingImage: '' });
     const [imagePreview, setImagePreview] = useState(null);
     const [categories, setCategories] = useState([]);
     const [search, setSearch] = useState('');
     const [sort, setSort] = useState('name_asc');
     const [selectedCategory, setSelectedCategory] = useState('');
     const [selectedProducts, setSelectedProducts] = useState([]);
     const [page, setPage] = useState(1);
     const [loading, setLoading] = useState(true);
     const [totalPages, setTotalPages] = useState(10);

     
 const router=useRouter();


    

    useEffect(() => {
        fetchProducts();
        fetchCategories();
      }, [search, selectedCategory, sort, page]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('/api/categories');
            setCategories(response.data);
        } catch (err) {
            console.error('Failed to fetch categories', err);
        }
    };
    
    const handleSearch = (e) => {
        setSearch(e.target.value);
        setPage(1);
    };
    
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setPage(1);
    };
    
    const handleSortChange = (sortOption) => {
        setSort(sortOption);
        setPage(1);
    };


    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/products', {
                params: { search, category: selectedCategory, sort, page, limit: 4 },
            });
            setProducts(response.data.products);
            setTotalPages(response.data.totalPages);
            setLoading(false);
        } catch (err) {
            console.error('Failed to fetch products', err);
            setLoading(false);
        }
      };














































    //   if (loading) {
    //     return <div>Loading products...</div>;
    // }
    // if (products.length === 0) {

    if (loading) {
        return <div>
            <Layout>

            <div className=" max-w-5xl  mx-auto px-2 ">


            <div className="breadcrumb-mockup w-[120px] h-7 rounded-lg mt-6 text-[16px] bg-gray-200 animate-pulse ">
           

            </div>
            <div>




            </div>

            <div className="flex items-center gap-4 mx mt-4 mx-auto -red-50 justify-between  max-w-[500px]  px-2 ">

                <div className="flex animate-pulse text-sm mx-auto  bg-slate-500 bg-opacity-15 rounded-xl mb-3  mt-1 w-full max-w-[310px] h-12  px-2 py-4">
               
                </div>
                <div className="text-sm text-gray-600">Search By keyWord</div>
                <div className="py-2 h-[44px] px-5 hidden rounded-xl text-sm  gap-2  text-gray-800 w-max fle items-center">
                <button className=" "onClick={() => setToggleStyle(!toggleStyle)} >
            <div className="p-2 flex gap-1 cursor-pointer 5  w-max rounded-lg bg-white shadow-lg">filter
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>

            </div></button>
                </div>
            </div>
         
            <div class="w-full items-center mb-7 ">
            <h1 className="text-[37px]  text-center play font-bold  mx-auto my-2 w-[250px] h-12 rounded-lg animate-pulse bg-gray-200"></h1>


            <div class=" flex items-center text-gray-500  ">
            {/* <span class="mr-3"> {page}/{totalPages}</span> */}
            <button onClick={() => setPage(page - 1)} disabled={page === 1} className="inline-flex bg-gray-200 mr-2 items-center ml-6 h-8 w-8 justify-center text-gray-400 rounded-md sw  animate-pulse dark:border-gray-800 leading-none py-0 ">
           

            </button>
            <button onClick={() => setPage(page + 1)} disabled={page === totalPages} className="inline-flex bg-gray-200 mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md animate-pulse border-gray-200 dark:border-gray-800 leading-none py-0">
          



            </button>
            </div>
            </div>

            <div className="grid grid-cols-2 place-items-center sm:grid-cols-3 gap- md:gap-3 mx-auto lg:grid-cols-4">
           <div>
                <div  className="rounded-3xl bg-gray-200 animate-pulse w-[180px] md:w-[230px] h-[190px] to-transparent bg-gradient-to-b  relative lg:p-3 p-3  md:p-5 sm:mx-2  sm:max-w-[240px] mx-au border-4 border-gray-50      ">
                </div>
                <div  className="rounded-xl bg-gray-200 animate-pulse w-[150px] h-[40px] to-transparent bg-gradient-to-b  relative lg:p-3 p-3  md:p-5 sm:mx-2  sm:max-w-[240px] mx-au border-4 border-gray-50      ">
                </div>
                <div  className="rounded-xl bg-gray-200 animate-pulse w-[130px] h-[40px] to-transparent bg-gradient-to-b  relative lg:p-3 p-3  md:p-5 sm:mx-2  sm:max-w-[240px] mx-au border-4 border-gray-50      ">
                </div>
           </div>
           <div>
                <div  className="rounded-3xl bg-gray-200 animate-pulse w-[180px] md:w-[230px] h-[190px] to-transparent bg-gradient-to-b  relative lg:p-3 p-3  md:p-5 sm:mx-2  sm:max-w-[240px] mx-au border-4 border-gray-50      ">
                </div>
                <div  className="rounded-xl bg-gray-200 animate-pulse w-[150px] h-[40px] to-transparent bg-gradient-to-b  relative lg:p-3 p-3  md:p-5 sm:mx-2  sm:max-w-[240px] mx-au border-4 border-gray-50      ">
                </div>
                <div  className="rounded-xl bg-gray-200 animate-pulse w-[130px] h-[40px] to-transparent bg-gradient-to-b  relative lg:p-3 p-3  md:p-5 sm:mx-2  sm:max-w-[240px] mx-au border-4 border-gray-50      ">
                </div>
           </div>
           <div>
                <div  className="rounded-3xl bg-gray-200 animate-pulse w-[180px] md:w-[230px] h-[190px] to-transparent bg-gradient-to-b  relative lg:p-3 p-3  md:p-5 sm:mx-2  sm:max-w-[240px] mx-au border-4 border-gray-50      ">
                </div>
                <div  className="rounded-xl bg-gray-200 animate-pulse w-[150px] h-[40px] to-transparent bg-gradient-to-b  relative lg:p-3 p-3  md:p-5 sm:mx-2  sm:max-w-[240px] mx-au border-4 border-gray-50      ">
                </div>
                <div  className="rounded-xl bg-gray-200 animate-pulse w-[130px] h-[40px] to-transparent bg-gradient-to-b  relative lg:p-3 p-3  md:p-5 sm:mx-2  sm:max-w-[240px] mx-au border-4 border-gray-50      ">
                </div>
           </div>
           <div>
                <div  className="rounded-3xl bg-gray-200 animate-pulse w-[180px] md:w-[230px] h-[190px] to-transparent bg-gradient-to-b  relative lg:p-3 p-3  md:p-5 sm:mx-2  sm:max-w-[240px] mx-au border-4 border-gray-50      ">
                </div>
                <div  className="rounded-xl bg-gray-200 animate-pulse w-[150px] h-[40px] to-transparent bg-gradient-to-b  relative lg:p-3 p-3  md:p-5 sm:mx-2  sm:max-w-[240px] mx-au border-4 border-gray-50      ">
                </div>
                <div  className="rounded-xl bg-gray-200 animate-pulse w-[130px] h-[40px] to-transparent bg-gradient-to-b  relative lg:p-3 p-3  md:p-5 sm:mx-2  sm:max-w-[240px] mx-au border-4 border-gray-50      ">
                </div>
           </div>
            </div>

         
           

            {/* <button  className="transition-all flex text-sm px-4 mx-auto  bg-emerald-700 text-white border rounded-full hover:ring  hover:ring-emerald-500 py-2 gap-1 ml-2" onClick={() => addToCart(product)}>
            Ajouter au panier
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
            </svg>

            </button> */}




            <style jsx>{`

            .product-card {
            border: 1px solid #ddd;
            padding: 20px;
            text-align: center;
            }
            .pagination {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            }


            `}</style>
            </div>
            <div className="flex items-center mt-12">

<button onClick={() => setPage(page - 1)} disabled={page === 1} className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0 ">
<svg class="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<polyline points="15 18 9 12 15 6"></polyline>
</svg>

</button>
{Array.from({ length: totalPages }, (_, index) => (
<button
key={index}
onClick={() => setPage(index + 1)}
className={page === index + 1 ? 'inline-flex mr-2 items-center h-8 w-8 justify-center  rounded-md shadow bg-white border-emerald-500 border text-emerald-500 dark:border-gray-800 leading-none py-0': 'inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border bg-white border-gray-200 dark:border-gray-800 leading-none py-0'}
// style={{ fontWeight: page === index + 1 ? 'bold ' : 'normal' }}
>
{index + 1}
</button>
))}
<button onClick={() => setPage(page + 1)} disabled={page === totalPages} className="inline-flex mr-2 items-center h-8 w-8 justify-center bg-white text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
<svg class="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>

</button>
</div>
            </Layout>
        </div>;
    }

    return (
        <Layout>
            
             <div className=" max-w-5xl  mx-auto px-2 ">
            <div id="top"></div>
            <Head>
                <title>Products</title>
                <meta name="description" content="Browse our product catalog." />
            </Head>
              
            {/* <div className="">
            <div className=" ">
                <button className="ml-2 bg-white font-semibold my-2 text-indigo-700 px-3 py-1 rounded-full" onClick={() => setFilterCategory('')}>All Categories</button>
                {categories.map((category, index) => (
                    <button className="ml-2 bg-indigo-700 px-3 py-1 rounded-full" key={index} onClick={() => setFilterCategory(category)}>
                        {category}
                    </button>
                ))}
            </div>
           
            </div> */}


            {/* still got to work about them break point  */}
            <div className="breadcrumb-mockup mt-6 text-[16px] ">
                <div className="flex items-center ">
                    <a href="/">
                    <Home className="size-4 text-gray-700"/>
                    </a>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <a href="/products">catalogue</a>
                
                </div>

                 </div>
            <div>
              

               
                
            </div>
          
            <div className="flex items-center gap-4 mx mt-4 mx-auto -red-50 justify-between  max-w-[500px]  px-2 ">
          
                        <div className="flex text-sm mx-auto  bg-slate-500 bg-opacity-15 rounded-xl mb-3  mt-1 w-full max-w-[310px]  px-2 py-4">
                            <SearchIcon className="size-5 inline text-gray-400"/>
                        <input
                                        type="text"
                                        value={search}
                                        onChange={handleSearch}
                                        className="bg-transparent w-full ml-2"
                                        placeholder="Filter by key word..."
                                    />
                        </div>
                        <div className="text-sm text-gray-600">Search By keyWord</div>
                        <div className="py-2 h-[44px] px-5 hidden rounded-xl text-sm  gap-2  text-gray-800 w-max fle items-center">
                        <button className=" "onClick={() => setToggleStyle(!toggleStyle)} >
                <div className="p-2 flex gap-1 cursor-pointer 5  w-max rounded-lg bg-white shadow-lg">filter
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
              </svg>

                </div></button>
                        </div>
           </div>
           {toggleStyle &&  
                <div className="fixed rounded-xl p-4 z-50 border-2 top-1/2 left-1/2 w-[400px]  -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl">
        <div class=" flex flex-wrap gap-2 ">
                    <button onClick={() => handleCategorySelect('')} className={selectedCategory === '' ? 'py-1 px-3 mx-2 block bg-emerald-400 text-sm text-emerald-500 bg-opacity-10 h-8 font-extrabold rounded-full': ' block h-8 py-1 px-3 mx-2 border text-sm text-gray-900 bg-opacity-10 font-extrabold rounded-full'}
                    >
                      Tous </button>
                    {categories.map((category, index) => (

                        <button
                            key={index}
                            onClick={() => handleCategorySelect(category)}
                          className={selectedCategory === category ? 'py-1 px-3 mx-2 block bg-emerald-400 text-emerald-500 bg-opacity-10 h-8 font-extrabold rounded-full text-sm': ' block h-8 py-1 px-3 mx-2 border text-gray-900 bg-opacity-10 font-extrabold rounded-full text-sm'}
                        >
                            {category}
                        </button>
                    ))}
        </div>
                <div class='flex text-sm  my-3 '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5Zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          </svg>

                <button className="block border-r sm:mx-2 mx-1 sm:text-center p-1" onClick={() => handleSortChange('name_asc')}>[AZ]</button>
                <button className="block border-r sm:mx-2 mx-1 sm:text-center p-1" onClick={() => handleSortChange('name_desc')}>[ZA]</button>
                <button className="block border-r sm:mx-2 mx-1 sm:text-center p-1" onClick={() => handleSortChange('price_asc')}>Price Asc</button>
                <button className="block border-r sm:mx-2 mx-1 sm:text-center p-1" onClick={() => handleSortChange('price_desc')}>Price Desc</button>
            </div>
                  </div>
                
            }
             <div class="w-full items-center mb-7 ">
             <h1 className="text-[37px] text-center play font-bold  mx-auto w-max my-2">Time to Shop now</h1>

          
          <div class=" flex items-center text-gray-500  ">
            {/* <span class="mr-3"> {page}/{totalPages}</span> */}
            <button onClick={() => setPage(page - 1)} disabled={page === 1} className="inline-flex bg-white mr-2 items-center ml-6 h-8 w-8 justify-center text-gray-400 rounded-md shadow  dark:border-gray-800 leading-none py-0 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>

                  </button>
                  <button onClick={() => setPage(page + 1)} disabled={page === totalPages} className="inline-flex bg-white mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow  border-gray-200 dark:border-gray-800 leading-none py-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>



                  </button>
          </div>
        </div>

<div className="grid grid-cols-2 place-items-center sm:grid-cols-3 gap- md:gap-3 mx-auto lg:grid-cols-4">
{products.map((product) => (
                    <div key={product.id} className="rounded-br-3xl h-[350px]  to-transparent bg-gradient-to-b  relative lg:p-3 p-3  md:p-5 sm:mx-2  sm:max-w-[240px] mx-au border-4 border-gray-50      ">
                      
                    <div className="flex gap-2 justify-between flex-col">
                        <div className="bg-white py-4 rounded-xl">
                            <img className="lg:size-[135px]  mx-auto my-2 md:size-[120px] size-[100px] object-cover " src={`/uploads/${product.image}`} alt={product.name} width="20" />    
                        </div>

                        <div>

                        <Link href={`/products/${encodeURIComponent(product.name)}`}> 
                    <div className="flex b flex-col   justify-between">
    
                            <div>
                                    <h2 className="font-bold text-lg pla wh break-words text-wrap">
                                        {product.name} Longrich 
                                    </h2>
                                    <div className="flex items-center m w-max justify-between">
                                            <p className="text-[20px]   text-gray-900">USD ${product.price}      
                                            </p>
                                    </div>
                                    <div className="flex justify-between">
                                
                                <button className="border p-3 rounded-full flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>Add in cart
                                </button>
                                <button className="border size-12 grid place-content-center rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </button>
                            </div>  
                            </div>
                            <div>
                                        
                                {product.category == "soins corporel" && <div className="bg-purple-500 px-4 w-max py-1 my-2 text-center text-[12px]  rounded-full bg-opacity-15 text-purple-500">{product.category}</div>}
                                {product.category == "hygiene" && <div className="bg-blue-500 px-4 w-max py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-blue-500">{product.category}</div>}
                                {product.category == "lotion" && <div className="bg-yellow-500 px-4 w-max py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-yellow-500">{product.category}</div>}
                                {product.category == "immunite" && <div className="bg-teal-500 px-4 w-max py-1 my-2 text-center rounded-full  text-[12px] bg-opacity-15 text-teal-500">{product.category}</div>}
                                {product.category == "nutrition" && <div className="bg-indigo-500 px-4 w-max py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-indigo-500">{product.category}</div>}
                                {product.category == "" && <div className="bg-red-500 px-4 w-max py-1 my-2 text-center rounded-full text-[12px]  bg-opacity-15 text-red-500">unavailable!</div>}
                                </div>  
                                
                    </div>
    
                        </Link> 
                        </div>
                    </div>
                     
                   
                   </div>
                 ))} 
 
 
             </div>
             <div className="flex items-center mt-12">

<button onClick={() => setPage(page - 1)} disabled={page === 1} className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0 ">
<svg class="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<polyline points="15 18 9 12 15 6"></polyline>
</svg>

</button>
{Array.from({ length: totalPages }, (_, index) => (
    <button
        key={index}
        onClick={() => setPage(index + 1)}
        className={page === index + 1 ? 'inline-flex mr-2 items-center h-8 w-8 justify-center  rounded-md shadow  border-emerald-500 border text-emerald-500 dark:border-gray-800 leading-none py-0': 'inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0'}
        // style={{ fontWeight: page === index + 1 ? 'bold ' : 'normal' }}
    >
        {index + 1}
    </button>
))}
<button onClick={() => setPage(page + 1)} disabled={page === totalPages} className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
<svg class="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>

</button>
</div>
                {/* <button  className="transition-all flex text-sm px-4 mx-auto  bg-emerald-700 text-white border rounded-full hover:ring  hover:ring-emerald-500 py-2 gap-1 ml-2" onClick={() => addToCart(product)}>
                    Ajouter au panier
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                    </svg>

                    </button> */}
              
           
         
     
            <style jsx>{`
                
                .product-card {
                    border: 1px solid #ddd;
                    padding: 20px;
                    text-align: center;
                }
                .pagination {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 20px;
                }
                
                
            `}</style>
        </div>
        <div className="bg-emerald-500 mx-auto flex gap-2 text-sm  my-3 p-3 mx max-w-[310px] ruunde rounded-xl bg-opacity-15 text-emerald-500">
                Afficher la liste de tous les categories
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>        
            </div>
        </Layout>
       
    );
}
