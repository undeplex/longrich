import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/AdminLayout';
import { Home } from 'lucide-react';
import Link from 'next/link';


// Dynamically import ReactQuill to avoid SSR issues

const EditProduct = () => {
 
  const router = useRouter();
  const { id } = router.query;
  const [reviewsTest, setReviewsTest] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    detail: '',
    price: '',
    priceDiscount: '',
    isPopular: '',
    category: '',
    subCategory: '',
    image: null,
    existingImage: ''
  });
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/products/${id}`)
        .then(response => {
          setForm({ ...response.data, image: null });
          setImagePreview(`http://localhost:5000/uploads/${response.data.image}`);
          fetchReviewsTest(response.data.id);
        })
        .catch(err => console.error('Failed to fetch product', err));
    }
  }, [id]);

  const fetchReviewsTest = (productId) => {
    axios.get(`http://localhost:5000/reviews?productId=${productId}`)
      .then(response => setReviewsTest(response.data))
      .catch(error => console.error('Failed to fetch reviews', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleDescriptionChange = (value) => {
    setForm({ ...form, description: value });
  };

  const handleDetailChange = (value) => {
    setForm({ ...form, detail: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(form).forEach(key => formData.append(key, form[key]));
      await axios.put(`http://localhost:5000/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      router.push(`/admin/free`);
    } catch (err) {
      console.error('Failed to update product', err);
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/review/${id}`)
      .then(() => {
        setReviewsTest(reviews.filter(review => review.id !== id));
      })
      .catch(error => console.error('Failed to delete review', error));
  };

  const renderFieldLabel = (fieldName) => (
    <div className="text-gray-900 my-1 font-bold">{fieldName}</div>
  );

  return (
    <AdminLayout>
      <div className="bg-white relative rounded-xl p-4 mx-auto lg:w-11/12">
      <Link href="/admin/free">
        <div className="underline w-max bg-opacity-20">
          Go back product List
        </div>
      </Link>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-3">
        <div className="relative">
            {renderFieldLabel('Product Name *')}
            <input className="w-full  p-[4px] lg:p-[7px] border-b text-sm border-gray-300  focus:outline-none focus:border-blue-600  "  type="text" name="name" placeholder="" value={form.name} onChange={handleInputChange} required />
        </div>
      
        <div className="relative">
            {renderFieldLabel('price')}
            <input className="w-full  p-[4px] lg:p-[7px] border-b text-sm border-gray-300  focus:outline-none focus:border-blue-600  "  type="number" name="price" placeholder="" value={form.price} onChange={handleInputChange} required />
        </div>
       
        <div className="relative">
            {renderFieldLabel('price discount')}
            <input className="w-full  p-[4px] lg:p-[7px] border-b text-sm border-gray-300  focus:outline-none focus:border-blue-600  "  type="number" name="priceDiscount" placeholder="" value={form.priceDiscount} onChange={handleInputChange} />
        </div>
     
        <div className="relative">
            {renderFieldLabel('keyword search')}
            <input className="w-full  p-[4px] lg:p-[7px] border-b text-sm border-gray-300  focus:outline-none focus:border-blue-600  "  type="text" name="keywordSearch" placeholder="" value={form.keywordSearch} onChange={handleInputChange} />
        </div>
       
        <div className="relative">
            {renderFieldLabel('category')}
            <input className="w-full  p-[4px] lg:p-[7px] border-b text-sm border-gray-300  focus:outline-none focus:border-blue-600  "  type="text" name="category" placeholder="" value={form.category} onChange={handleInputChange} />
        </div>
       
        <div className="relative">
            {renderFieldLabel('subCategory')}
            <input className="w-full  p-[4px] lg:p-[7px] border-b text-sm border-gray-300  focus:outline-none focus:border-blue-600  "  type="text" name="subCategory" placeholder="" value={form.subCategory} onChange={handleInputChange} />
        </div>
       
       
    
     
        <div className="relative">
                {renderFieldLabel('details')}
                <textarea  className="w-full  p-2 border min-h-14 border-gray-300  focus:outline-none focus:border-blue-600 "  name="detail" placeholder="" value={form.detail} onChange={handleInputChange} required></textarea>

        </div>
        <div className="relative">
            {renderFieldLabel('isPopularTag')}
            <input className="w-full  p-[4px] lg:p-[7px] border-b text-sm border-gray-300  focus:outline-none focus:border-blue-600  "  type="text" name="isPopular" placeholder="" value={form.isPopular} onChange={handleInputChange} />
        </div>
        <div className="relative">
                {renderFieldLabel('description')}
                <textarea  className="w-full  p-2 border border-gray-300  focus:outline-none focus:border-blue-600   bg-opacity-5 " name="description" placeholder="" value={form.description} onChange={handleInputChange}></textarea>
        </div>

          <div className="relative t overflow-clip mt pt-[70px] ">
            
            <input type="file" name="image" onChange={handleFileChange} />
            <div>
            <p>Image Preview</p>
            {imagePreview && <img src={imagePreview} alt="Preview" width="100" className="mx-auto" />}
          </div>
          <button
            className="bg-emerald-500 block rounded-xl mx-auto font-bold text-white px-4 py-3 h-12 w-9/12"
            type="submit"
          >
            {form.id ? 'Update' : 'Add'} Product
          </button>
          </div>

        


        </form>
      </div>

      <div className="reviews">
        {reviewsTest.map((r) => (
          <div key={r.id} className="border-b mb-2">
            <p>{r.name} ({r.rating} Stars): {r.comment}</p>
            <button onClick={() => handleDelete(r.id)}>Delete</button>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default EditProduct;
