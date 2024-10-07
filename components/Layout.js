import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileMenu from './MobileMenu';
import SearchForm from './SearchForm';
import CartIcon from './CartIcon';
import Footer from './Footer';
import Popup from './Popup';
import CartPop from './Cartpop';
import { CircleArrowLeftIcon } from 'lucide-react';
import Trythis from './Trythis';
import { BoltIcon } from '@heroicons/react/24/solid';

export default function Layout({ children }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [cartIndicator, setCartIndicator] = useState(false);
    const router = useRouter();

    useEffect(() => {
        checkCartIndicator();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/search?q=${searchQuery}`);
    };

    const checkCartIndicator = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length > 0) {
            setCartIndicator(true);
        } else {
            setCartIndicator(false);
        }
    };

    return (
        <div className="fle relative flex-col  justi justify-center">
              <div className="absolute lg:block hidden border-[65px] bg-transparent top-1 -left-[100px] size-[300px] border-white rounded-full --10">
        </div>  
        <div className="absolute lg:block hidden border-[78px] bg-transparent top-[57px] -right-[100px] size-[360px] border-white rounded-full -10">
        </div>  
            <header className="border w-full z-50  border-b-emerald-100 fixed top-0 bg-white">
        <div  className="text-sm bg-black py-2 text-gray-200 flex items-center gap-2 px-1">

        <BoltIcon className="w-6 text-gray-100"/>Ce site est toujours sous-developpement ,c'est une phase de test !PEACE
        </div>
               
                <div className=" lg:hidden md:hidden w-full flex gap-2 px-2 items-center my-2 justify-between ">
                    <div className="flex">
                    <div className="flex items-center">
                        <Link href="/">
                            <div className="play">LONGRICH store Co.</div>
                        </Link>
                    </div>
                    
                    </div>
                    
                        <form onSubmit={handleSearch} className="hidden">
                            <div className="  ">
                                <div className="  items-center bg-black rounded-2xl bg-opacity-5 flex  px-2">

                                <input
                                type="text"
                                value={searchQuery}
                                className="bg-transparent px-1 py-3 inline w-full text-sm "
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search products..."
                                />
                                
                                <div>
                                <button type="submit " className=" block">
                                       
                                </button>
                                </div>
                                </div>
                            </div>
                        </form>
                       

                    <div className="relative gap- items-center flex gap-2 items-cente">
                                <SearchForm/> 
                               
                                <Trythis/>
                                <MobileMenu/>
                       
                    </div>



                </div>
                    <div className="hidden w-full z z-50 my g-white border-b-o  fixed  top-[-1px]  lg:block md:block">

                <nav className="fu w-full bg-white border-b-2 px-14 py-2">
                    <div className="flex w- justify-between items-center">


                    {/* <div className="flex items-center gap-2 ">
                    <Link href="/admin">Admin</Link>
                    <Link href="/product">Shop</Link>
                    <Link href="/stable">Stable&copy;</Link>
                    <Link href="/player/community-join">join</Link>
                    <Link href="/player/contact-admin">contact</Link>
                   
                    </div> */}
                    <div></div>

                    <Link href="/">
                    <div className="flex items-center gap-2">
                        {/* <img className="w-[122px]" src="/longrich.jpg"/> */}
                       
                        <span className="play text-3xl bo font-bold">
                            LONGRICH Store
                        </span>
                        <span className="play">
                           By Caleb
                        </span>
                    </div>
                    </Link>


                   
                <div className="flex gap-2 items-center">
                    <SearchForm/>                    
                    <Trythis/>


                    <Link href="/product">
                        <button className="gap-1 text-sm bg-black flex  items-center text-white py-2 px-3 rounded-full">
                            Shop now
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr- inline">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </Link>
                </div>
                    </div>
                       <div className="flex w-max  mx-auto mt-2 items-center gap-2 ">
                    <Link href="/admin">Admin</Link>
                    <Link href="/product">Shop</Link>
                    <Link href="/saturday">saturday <CircleArrowLeftIcon className="inline  text-gray-600 size-4" /></Link>
                    <Link href="/adhesion">join</Link>
                    <Link href="/player/contact-admin">contact</Link>
                    <Link href="/player/contact-admin">FAQ</Link>
                   
                    </div>
                </nav>
                    </div>
            </header>


            <main className="min-h-screen border- overflow-x-hidden bg-gray-50  pb-4 sm:pt-[127px] pt-[120px] z-50">{children}</main>



            <div className="w-full  ">

            <Footer/>
            </div>
            
        </div>
    );
}
