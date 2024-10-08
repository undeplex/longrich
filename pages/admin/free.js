
import AdminLayout from '@/components/AdminLayout';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import { SearchIcon,Settings2Icon, PlusIcon, Settings, ToggleLeftIcon, Activity, Dot } from 'lucide-react';
import Link from 'next/link';
const Products = () => {
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
    const [totalPages, setTotalPages] = useState(1);
    
const router=useRouter();

const handleActionClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

useEffect(() => {
  fetchProducts();
  fetchCategories();
}, [search, selectedCategory, sort, page]);

const fetchProducts = async () => {
  try {
      const response = await axios.get('https://express-xzfm.onrender.com/products', {
          params: { search, category: selectedCategory, sort, page, limit: 5 },
      });
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
  } catch (err) {
      console.error('Failed to fetch products', err);
  }
};

  // ... Other handlers remain the same
  const handleDeleteImage = async (image) => {
    try {
        await axios.delete(`https://express-xzfm.onrender.com/unused-images/${image}`);
        fetchImages();
    } catch (err) {
        console.error('Failed to delete image', err);
    }
};


  
const handleDelete = async (productId) => {
  const confirmDelete = window.confirm('Are you sure you want to delete this product? This action cannot be undone.');
 
  if (!confirmDelete) return;

  try {
      await axios.delete(`https://express-xzfm.onrender.com/products/${productId}`);
      fetchProducts(); // Refresh product list after deletion
  } catch (err) {
      console.error('Failed to delete product', err);
  }
};

  const handleSelectProduct = (id) => {
      setSelectedProducts((prevSelectedProducts) => {
          if (prevSelectedProducts.includes(id)) {
              return prevSelectedProducts.filter((productId) => productId !== id);
          } else {
              return [...prevSelectedProducts, id];
          }
      });
  };

  const handleDeleteSelected = async () => {
      try {
          await Promise.all(selectedProducts.map(id => axios.delete(`https://express-xzfm.onrender.com/products/${id}`)));
          setSelectedProducts([]);
          fetchProducts();
      } catch (err) {
          console.error('Failed to delete selected products', err);
      }
  };


  const handleView = (product) => {
    router.push(`/big/view/${product.id}`);
  };

  const handleEdit = (product) => {
    router.push(`/big/edit/${product.id}`);
  };

  

  const fetchCategories = async () => {
    try {
        const response = await axios.get('https://express-xzfm.onrender.com/categories');
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











  return (
    <div>

    <AdminLayout>
    
      {/* <div className=" md:w-11/12 my-3 px-2 w-full lg:w-11/12 mx-auto">
                  
      </div> */}

<div class="mx-auto rounded-xl dark:bg-gray-900 dark:text-white text-gray-600 min-h-screen overflow-hidden text-sm md:w-11/12 w-full lg:w-11/12">
  
 
   
   
     
      <div class=" bg-white dark:bg-gray-900 overflow-y-auto px-5 py-4 ">
      <div className="flex text-sm   bg-slate-500 bg-opacity-5 rounded-xl mb-3  mt-1 w-full max-w-[310px]  px-2 py-3">
        <SearchIcon className="size-5 inline text-gray-400"/>
      <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    className="bg-transparent w-full ml-2"
                    placeholder="Filter by key word..."
                />
      </div> 
        <div class="flex justify-between items-center">

     <button class="px-4 py-2 border rounded-full" onClick={()=> handleDeleteSelected()}>Delete selected</button>
      <div class="flex items-center gap-2">

        <Link href="/admin/add_product">
      <div class="bg-emerald-500 hover:bg-emerald-600  color text-white py-2 px-2  md:px-4 lg:px-4 rounded-xl">
        <button class="flex items-center gap-1 font-bold">
        <span class="lg:block hidden md:block w-max  py-1 rounded-full"> Ajouter</span>
        <PlusIcon className="size-5 font-bold rounded-full"/>   
          </button>
        
      </div>
        </Link>
      <button className=" "onClick={() => setToggleStyle(!toggleStyle)} >
                <div className="p-2 flex gap-1 cursor-pointer bg-gray-400 bg-opacity-5  w-max rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
              </svg>

                </div></button>
        
      <span class="lg:flex md:flex items-center font-bold hidden">
          Filter from category or sort 
      </span>
      </div>
        </div>

             
                {toggleStyle &&  
                <div>
        <div class="flex  py-4  overflow-scroll scroll-bar-hidden text-sm ">
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
                <div class=" mt-3">
          <div class="w-full items-center mb-7 ">
          
            <div class="ml-auto text-gray-500 text-xs sm:inline-flex items-center">
              <span class="mr-3">Page {page} of {totalPages}</span>
              <button onClick={() => setPage(page - 1)} disabled={page === 1} className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0 ">
                    <svg class="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>

                    </button>
                    <button onClick={() => setPage(page + 1)} disabled={page === totalPages} className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-gray-800 leading-none py-0">
                    <svg class="w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>

                    </button>
            </div>
          </div>
          
          <table class="w-full text-left">
            <thead className="font-bold">
              <tr class="text-gray-400 ">
                <th class="font-bold md:table-cell lg:table-cell text-center px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
                </th>
               
                <th class=" font-normal px-3  pt-0 pb-3 text-center border-b border-gray-200 dark:border-gray-800">Images</th>
                <th class="font-normal px-3  pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Nom</th>
                <th class="font-normal hidden sm:table-cell md:table-cell lg:table-cell px-3  pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">SubCategory/featured</th>
                <th class="font-normal hidden sm:table-cell md:table-cell lg:table-cell px-3  pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Price</th>
                <th class="hidden  md:table-cell lg:table-cell text-center px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
                    <div class="flex font-normal mx-auto w-max">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 font-bold ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                </svg>id
                    </div>
                </th>
                <th class="font-normal hidden md:table-cell lg:table-cell px-3  pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">Category</th>
              </tr>
            </thead>

            <tbody class="">


            {products.map((product) => (
                                <tr key={product.id} className=" items-center gap-12 mt-3">
                                    <td className=" pl-5  ">
                                        <input
                                            type="checkbox"
                                            className=""
                                            checked={selectedProducts.includes(product.id)}
                                            onChange={() => handleSelectProduct(product.id)}
                                        />
                                    </td>
                                    <td className="  flex justify-center ">

                                    <img className="scal " src={`https://express-xzfm.onrender.com/uploads/${product.image}`} alt={product.name} width="62"  />
                    
                                    </td>
                <td class=" border-b border-gray-200">
                  <button  className="block truncate md:max-w-max lg:max-w-max   max-w-[110px] "     onClick={() => handleActionClick(product)}>
                    {product.name}
                 </button>
                </td>

                                         
                <td class="sm:p-3 hidden md:table-cell lg:table-cell py-2 px-1 sm:table-cell  border-b border-gray-200 dark:border-gray-800  ">{product.subCategory},{product.isPopular}</td>
                <td class="sm:p-3 hidden md:table-cell lg:table-cell py-2 px-1 sm:table-cell border-b border-gray-200 dark:border-gray-800  ">{product.price}</td>


                <td className="text-center hidden  py-2 px-1 border-b border-gray-200  md:table-cell lg:table-cell">{product.id}</td>

                <td class="sm:p-3 hidden md:table-cell lg:table-cell py-2 px-1 border-b border-gray-200 dark:border-gray-800  ">
                  
                  {product.category == "soins corporel" && <div className="bg-purple-500 px-4 w-max py-1 text-center text-[12px]  rounded-full bg-opacity-15 text-purple-500">{product.category}</div>}
                  {product.category == "hygiene" && <div className="bg-blue-500 px-4 w-max py-1 text-center rounded-full text-[12px]  bg-opacity-15 text-blue-500">{product.category}</div>}
                  {product.category == "lotion" && <div className="bg-yellow-500 px-4 w-max py-1 text-center rounded-full text-[12px]  bg-opacity-15 text-yellow-500">{product.category}</div>}
                  {product.category == "immunite" && <div className="bg-teal-500 px-4 w-max py-1 text-center rounded-full  text-[12px] bg-opacity-15 text-teal-500">{product.category}</div>}
                  {product.category == "nutrition" && <div className="bg-indigo-500 px-4 w-max py-1 text-center rounded-full text-[12px]  bg-opacity-15 text-indigo-500">{product.category}</div>}
                  {product.category == "" && <div className="bg-red-500 px-4 w-max py-1 text-center rounded-full text-[12px]  bg-opacity-15 text-red-500">unavailable!</div>}
                  
                  
                  </td>
                

                                    

                                      {showModal && selectedProduct && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <div className="bg-white  shadow-sm rounded-xl p-6 w-80">
            <div className="flex flex-col items-center">
            <div className="flex  items-center w-full justify-between">
               
              <h2 className="text-white  bg-red-500 px-3 py-2 ">{selectedProduct.isPopular}</h2>
            <button
                onClick={() => setShowModal(false)}
                className=" text- text-gray-600 underline self-"
              >
                CLOSE 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 inline">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <img className=" " src={`https://express-xzfm.onrender.com/uploads/${selectedProduct.image}`} alt={selectedProduct.name} width="165"  />

              <h2 className="text-2xl font-bol mb-3 ply">{selectedProduct.name}</h2>
              <h2 className="text-xl font-bold text-emerald-950 mb-1 ">~ USD ${selectedProduct.price}/USD ${selectedProduct.priceDiscount}</h2>
              <h2 className="text-lg  text-gray-500 underline "><span className="">Category:</span> {selectedProduct.category}</h2>
              <h2 className="text-lg mb-2  text-gray-500 underline "><span className="">subCategory: </span>{selectedProduct.subCategory}</h2>
              
              <div className="flex gap-2 my-3">

              <button onClick={() => handleEdit(selectedProduct)}  className="w-full  r sm:mx-2 mx-1 sm:text-center border border-emerald-500 ro px-4 py-2 rounded-full text-emerald-600  flex items-center gap-2">
                Editer
              </button>
              <button onClick={() => handleDelete(selectedProduct.id,selectedProduct.image) } className="w-full bg-red-500 text-red-500 bg-opacity-15 px-4 py-2 rounded-full  flex gap-1">
                Supprimer
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 inl inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
              </button>
              </div>
              <button onClick={() => handleView(selectedProduct)} className="w-full text-gray-500 text-lg  underline bg-opacity-15  px-4 py-2 rounded ">
              Afficher plus de detail
              </button>
             
            </div>
          </div>
        </div>
      )}
                                   
                                </tr>
                            ))}
         
            </tbody>
          </table>





     

















          <div>
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
                </div>
          
        </div>
                
      
      </div>
    </div>
  

  

  
    </AdminLayout>
 



    
    




    </div>
  );
};




//to get product from the server side using the server side rendering stuff from next js


export default Products;