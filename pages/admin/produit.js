import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout_admin from '@/components/Layout_admin';
import AdminLayout from '@/components/AdminLayout';

export default function Admin() {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ id: '', name: '', price: '', priceDiscount: '', detail: '', description: '', keywordSearch: '', category: '', image: null, existingImage: '' });
    const [imagePreview, setImagePreview] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    useEffect(() => {
        fetchProducts();
    }, [searchQuery, currentPage]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/products', {
                params: {
                    keywordsearch: searchQuery,
                    page: currentPage,
                    limit: 20
                }
            });
            setProducts(response.data.products);
            setCurrentPage(response.data.currentPage);
            setTotalPages(response.data.totalPages);
        } catch (err) {
            console.error('Failed to fetch products', err);
        }
    };

    // ... Other handlers remain the same

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };


    const handleEdit = (product) => {
        setForm({ ...product, existingImage: product.image });
        setImagePreview(`http://localhost:5000/uploads/${product.image}`);
        document.getElementById('my_modal_4').style.display='block';
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/products/${id}`);
            fetchProducts();
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
            await Promise.all(selectedProducts.map(id => axios.delete(`http://localhost:5000/products/${id}`)));
            setSelectedProducts([]);
            fetchProducts();
        } catch (err) {
            console.error('Failed to delete selected products', err);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

  
    const handleView = (product) => {
        setForm({ ...product, existingImage: product.image });
        setImagePreview(`http://localhost:5000/uploads/${product.image}`);
        document.getElementById('my_modal_5').style.display = 'block';
    };

    








    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('price', form.price);
        formData.append('priceDiscount', form.priceDiscount);
        formData.append('detail', form.detail);
        formData.append('description', form.description);
        formData.append('keywordSearch', form.keywordSearch);
        formData.append('category', form.category);
        formData.append('image', form.image || form.existingImage);

        try {
            if (form.id) {
                await axios.put(`http://localhost:5000/products/${form.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            } else {
                await axios.post('http://localhost:5000/products', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            }
            setForm({ id: '', name: '', price: '', priceDiscount: '', detail: '', description: '', keywordSearch: '', category: '', image: null, existingImage: '' });
            setImagePreview(null);
            fetchProducts();
        } catch (err) {
            console.error('Failed to submit form', err);
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setForm({ ...form, image: file });
        setImagePreview(URL.createObjectURL(file));
    };
  

    return (
        <div className=" ">
           
           <AdminLayout>
            <div className="admin-content ">
               
                <div className="product-list">
                    <h2>Products</h2>
                    <input type="text" placeholder="Search by keywords" value={searchQuery} onChange={handleSearchChange} 
                    className="bg-white  block " />
               
                    <button onClick={handleDeleteSelected} disabled={selectedProducts.length === 0}>Delete Selected</button>
                 <div className="w-full ">
                    
                       
                            {products.map((product) => (
                                <tr key={product.id} className="flex items-center gap-12 mt-3">
                                    <div className="">
                                        <input
                                            type="checkbox"
                                            checked={selectedProducts.includes(product.id)}
                                            onChange={() => handleSelectProduct(product.id)}
                                        />
                                    </div>
                                    <div className="  flex justify-center w-max">

                                    <img className=" " src={`http://localhost:5000/uploads/${product.image}`} alt={product.name} width="67"  />
                                    </div>
                                    <div className="text-gray-800 text-center  w-[200px] first text-lg font-bold ">{product.name}</div>
                                    <div className="text-gray-00 text-center w-[120px] first text-lg  text-emerald-800 rounded-full px-2 py-1 bg-emerald-600 bg-opacity-15  ">{product.category}</div>

                                    <div className="text-gray-700 text-lg font-bold w-[100px] text-center   ">{product.price}$</div>
                                    <div className="flex gap-3">
                                        <button onClick={() => handleEdit(product)}>
                                        <div className="underline">
                                            Edit
                                        </div>    
                                        </button>
                                        <button onClick={() => handleDelete(product.id)}>
                                            <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>

                                            </div>
                                        </button>
                                        <button onClick={() => handleView(product)}>
                                            <div className="flex  items-center">
                                                View
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                                            </svg>
                                            </div>
                                        </button>
                                    </div>
                                </tr>
                            ))}
                 </div>
                    <div className="pagination">
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                    </div>
                </div>
            </div>




           
            
         
           



           
            </AdminLayout>
           
           {/* You can open the modal using document.getElementById('ID').showModal() method */}



        
        </div>
    );
}
