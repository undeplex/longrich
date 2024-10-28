


import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Layout from '@/components/Layout';
import StarRating from '@/components/StarRating'; // Adjust the path accordingly
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { cartAtomWithStorage } from '../../atoms/cart';
import { ArrowDown, FacebookIcon, Home, LucideRocket } from 'lucide-react';
import Perks from '@/components/Perks';
import { ChatBubbleBottomCenterIcon, ChatBubbleLeftRightIcon, ShoppingBagIcon, StarIcon, UserIcon } from '@heroicons/react/24/solid';
import Faq from '@/components/Faq';
import SlideMe from '@/components/SlideMe';

export default function ProductPage() {
    const [cart, setCart] = useAtom(cartAtomWithStorage);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [review, setReview] = useState({ name: '', email: '', comment: '', rating: 1 });
    const [reviews, setReviews] = useState([]);
    const [reviewCount,setReviewCount] = useState();
    const router = useRouter();
    const [isInCart, setIsInCart] = useState(false);
    const { id } = router.query;


    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/products/${id}`)
                .then(response => {
                    setProduct(response.data);
                    setIsInCart(checkIfInCart(response.data));
                    fetchRelatedProducts(response.data.subCategory);
                    fetchReviews(response.data.id);
                })
                .catch(error => console.error(error));
        }
    }, [id]);

    const fetchRelatedProducts = (subCategory) => {
        axios.get('http://localhost:5000/products', { params: { subCategory } })
            .then(response => setRelatedProducts(response.data.products.filter(prod => prod.id !== id)))
            .catch(error => console.error('Failed to fetch related products', error));
    };

    const fetchReviews = (productId) => {
        axios.get(`http://localhost:5000/reviews?productId=${productId}`)
            .then(response => setReviews(response.data))
            .catch(error => console.error('Failed to fetch reviews', error));
    };

    const handleReviewChange = (e) => {
        const { name, value } = e.target;
        setReview(prev => ({ ...prev, [name]: value }));
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/reviews`, { ...review, productId: id })
            .then(() => {
                alert('Review submitted for approval');
                setReview({ name: '', email: '', comment: '', rating: 1 });
                fetchReviews(id); // Refresh reviews after submitting
            })
            .catch(error => console.error('Failed to submit review', error));
    };



    const fetchReviewCount = (productId) => {
        axios.get(`http://localhost:5000/products/${productId}/review-count`)
            .then(response => setReviewCount(response.data.count))
            .catch(error => console.error('Failed to fetch review count', error));
    };




    const checkIfInCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        return cart.some(item => item.id === product.id);
    };
    const handleOrderNow = () => {
        if (!isInCart) addToCart(product);
        router.push('/order');
    };

   
    const addToCart = (product) => {
        if (isInCart) {
            alert('Item already in the cart');
            return;
        }
        setLoading(true);
        const updatedCart = [...cart, { ...product, quantity: 1 }];
        setCart(updatedCart);
        setLoading(false);
    };
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <Layout>
            <div className="max-w-[1200px] bg-white rounded-2xl  mx-auto p-4 -mt-1 md:mt-4  relative">
                {/* Product Details */}
<div className=" flex  lg:flex-row md:flex-row flex-col lg:gap-16  md:gap-10">
           <div className="bg-red-00">

                <div className="breadcrumb-mockup text-[16px] ">
                <div className="flex items-center  ">
                    <a href="/">
                    <Home className="size-4 text-gray-700"/>
                    </a>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <a href="/freestyle1">catalogue</a>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <a href="/freestyle1" className="">{product?.category}</a>
                 
                    
                </div>

                 </div>
                 
                 <img className="mx-auto lg:w-[395px] block  md:w-[470px] w-[214px] py-3" src={`http://localhost:5000/uploads/${product?.image}`} alt={product?.name} width="400" />
</div>

   <div className=" lg:w-9/12 md:w-10/12 lg:pt-10 md:pt-9">
        <p>APLEX</p>
    <h2 className="font-bold ply lg:text-3xl  text-3xl justify-between flex gap-2 items-center"> {product?.name} Longrich 100ml </h2>                           
                <div className="flex gap-1 my-1 items-center  play">
                    <span className="play font-bold text-lg text-0 -yellosm:w-7 w-70">4.3 </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-yellow-500 sm:w-7 w-70">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                           
                <span className="text-sm">({reviews.length} Avis )</span>
                </div>
               <div className="text-gray-500  my-4 ">
               {/* <p dangerouslySetInnerHTML={{ __html: product?.description }}></p>  */}
                </div> 
          
          <div className="flex gap-2 items-center mt-4 mb-2">
                                <p className="text-lg   text-gray-500  line-through">USD ${product?.price}</p>
                                <p className="text-3xl  font-bold text-slate-950">USD ${product?.priceDiscount}</p>
                                <p className="lg:text-xl  text-lg text-red-500 ml-4 ">- {product?.price - 4 }% </p>
          </div> 
          <div className="flex gap-2 et text-sm">

            <p>Tax included</p>
            <div>
                <span className="size-3 inline-block  mr-1 rounded-full bg-green-500"></span>
                +50 Available InStock
            </div>
          </div>

          <div className="sm:flex md:flex-col lg:flex-row sm:flex-col  sm:items-start sm:text-sm hidde sm:max-w mt-4  gap-6 lg:flex md:flex  items-center ">
                <button onClick={() => addToCart(product)} className="flex   items-center gap-1 px-2 py-3 bg-opacity-45 text-emerald-900 bg-emerald-500  text-lg border justify-center rounded-xl sm:w-max w-full mx-auto sm:txt-sm md:text-sm lg:text-lg ">
                {loading ? 'Adding...' : 'Ajouter au panier'}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                        </svg>
              </button>
              <div className="flex my-2 gap-2 text-sm items-center"><LucideRocket className="text-gray-600 inline mt-2 w-1/12" />
              <div className=" w-11/12">

              <p className="font-bold">Swift at delivering as sane promise !</p> 
              <p>

              Nous vous livrons vos produits commander le plus vite que possible
              </p>
              </div>
              </div>
          </div>
    </div>  
 
</div>



            <div className=" lg:gap-5 ">

              <div className="h-max relative ">
               <div className="space-y- my-8 bg-white  rounded-2xl">
        {[
          { title: "Apercu sur le produit", content: product?.detail },
          { title: "Description du produit", content: product?.detail },
          { title: "Utilisation", content: product?.detail },
          { title: "Composition", content: product?.detail },
        ].map((section, index) => (
          <div key={index} className="border- ">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left bg-re- px-3  focus:outline-none hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex justify-between py-3 items-center ">
                <span className="font-bold text-lg p-2s">{section.title}</span>
                {activeIndex === index && <div className="text-2xl te font-bold">-</div>}
                {activeIndex !== index && <div className="text-2xl te font-bold">+</div>}

              </div>
            </button>
            <div
              className={`overflow-hidden text-gray-700 text-[15px] transition-[max-height] duration-500 ease-in-out ${
                activeIndex === index ? "max-h-[630px]" : "max-h-0"
              }`}
            >
              <div className="px-3">
                <p dangerouslySetInnerHTML={{ __html: section.content }}></p>
              </div>
            </div>
          </div>
        ))}
      </div> 
      <div className="text-center">Connect with us :</div>
                <div className="flex gap-5 sm:gap-4 my-3 w-max mx-auto ">
                        
                        <svg className="fill-gray-800 sm:w-5 w-5"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        
                        <svg className="fill-gray-800 sm:w-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>                      
                              <svg className="fill-gray-800 sm:w-5 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>
                        <svg className="fill-gray-800 sm:w-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>   
                              <svg className="fill-gray-800 sm:w-5 w-5"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                </div>


    <Perks/>


             
              <div className="reviews my-5">
                    <h2 className="font-bold text-2xl play mb-2 ">({reviews.length}) Avis des clients ayant deja utiliser {product?.name} Longrich*</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {reviews.map(r => (
                        <div key={r.id} className="bg-emerald-400 bg-opacity-5 p-2  rounded-br-3xl pb-4 my-2 bor border-b ">
                                <p>
                            <p className="flex gap-1 items-center">
                            <UserIcon className="size-7 text-gray-500 border p-1 rounded-full"/>
                            <span className="font-bold text-lg play">
                                {r.name}
                            </span>
    </p> 
    <p className="text-gray-500 my-1 text-sm">
 {r.comment}</p>
 <p className="text-sm flex justify-between mx-3">
<p className="  flex text-gray-500  items-center">
                   {r.rating} Stars                 
</p>
 <span> Ecrit il y a {r.rating} jours</span>
 </p>

    </p>
                           
                        </div>
                    ))}
                   </div>   
                </div>   
    <div>
         
<button className="bg-black block w-max mx-auto text-white px-5 py-3 o">Laisser votre avis <ChatBubbleLeftRightIcon className="size-6 inline"/> </button>

<div className="hidden  max-w-xl mx-auto my-3 rounded-2xl p-4  ">
    <form onSubmit={handleReviewSubmit}>
        <StarRating rating={review.rating} onChange={(rating) => setReview(prev => ({ ...prev, rating }))} />

    <div className="pl-2 flex mt-2 border w-full  items-center gap-2"
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
        </svg>
        <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={review.name}
            onChange={handleReviewChange}
            required
            className="w-full  block py-3"
        />
        </div>



        <div className="flex mt-2 pl-2 border w-full  items-center gap-2"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>

      

        <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={review.email}
            onChange={handleReviewChange}
            required
            className="w-full  block py-3"

        />

        </div>
        <textarea
            name="comment"
            placeholder="Your Comment"
            value={review.comment}
            onChange={handleReviewChange}
            required
            className="block mt-2 p-3 border lg:w-full w-full mb-2"
        />
        <div className="max-w-[360px] bg-emerald-500 text-emerald-500 bg-opacity-10">

        <button type="submit" className="w-full p-3  block">Submit Review</button>
        </div>
    </form>
</div>


            </div>
              {/* the space */}
              <h2 className="font-bold text-3xl text-slate-600 my-4 play text-center">Les produits si dessous pourraient aussi vous interessez :</h2>
                 <div className="related-products flex flex-wrap ">
                    {relatedProducts.map(relatedProduct => (
                        <div key={relatedProduct.id} className=" mx-auto">
                            <Link href={`/freestyle1/${relatedProduct.id}`}>
                               
                                    <img src={`http://localhost:5000/uploads/${relatedProduct.image}`} alt={relatedProduct.name} className="w-[120px] mx-auto block" />
                                    <p className="font-semibold text-lg">{relatedProduct.name}</p>
                                    <p className=" text-gray-900 ">${product.price}
                        
                        <span className="line-through 400 italic ml-2 text-sm">${product.priceDiscount}</span>
                         </p>                                
                            </Link>
                        </div>
                    ))}
                </div> 



              </div>
              <div className="my-4">
                <h1 className="text-center text-3xl">BESOIN D'AIDE ?</h1>
                <h2 className="text-center bg-black py-2 my-2 text-white">ECRIRE AU SERVICE CLIENT</h2>
                <h2 className="text-4xl text-center play">~ou~</h2>
                <h2 className="text-center my-2 underline">Voir les questions les plus frequenment poses nous concernant</h2>
                    <ArrowDown className="mx-auto size-[38px]"/>
              </div>

    <Faq/>
            </div>
            </div>

        <button className="-translate-x-1/2  flex  left-1/2 items-center fixed bottom-3 mx-auto w-max zi z-20  bg-gradient-to-bl to-emerald-500 from-indigo-400 text-white px-3 py-4 rounded-xl gap-2 sm:hidden" onClick={() => {handleOrderNow();addToCart(product)}} >Commander ce produit
        <ShoppingBagIcon className="size-6"/>
        </button>

        </Layout>
    );
}



