
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CartIcon from './CartIcon';
import { Search } from 'lucide-react';
import { Bars2Icon } from '@heroicons/react/24/solid';
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
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
 const [toggleStyle, setToggleStyle]= useState(false)

  return (
    <div>
      <button
        onClick={() => {setIsOpen(!isOpen);setToggleStyle(!toggleStyle)}}
        className="  focus:outline-none"
      >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>

      </button>

      <div className={`fixed border-b-2 border-l-2 top-0 left-0 w-full p-4 bg-gray-5 bg-white h-max rounded-bl-3xl z-50 transform transition-transform ${isOpen ? 'translate-y-0 ' : '-translate-y-[900px]'}`}>
        <div className="">        <button
            onClick={() => {setIsOpen(false);setToggleStyle(!toggleStyle)}}
            className="p-2 focus:outline-none underline"
          >CLOSE THIS MENU 
            
          </button>
        <div className="flex items-center my-3">
                            <img src="/longdark.png" className="invert" width="150px"/>
                            <span className="text-[11px] text-slate-900  font-bold ">Store</span>
                        </div>
                        <div className="text-sm my-2 text-gray-400">*Be all you got from a good well-being</div>
         
          <div className="">
          <form onSubmit={handleSearch} className="">
                            <div className="  ">
                                <div className="te  items-center bg-black rounded-xl bg-opacity-5 max-w-[260px] flex  px-2">

                                    <input
                                    type="text"
                                    value={searchQuery}
                                    className="bg-transparent px-1 py-[11px] inline w-full text-sm "
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search products..."
                                    />
                                    <Search className="text-gray-500"/>
                                
                                <div>
                                <button type="submit " className=" block">
                                       
                                </button>
                                </div>
                                </div>
                            </div>
                        </form>
                        

                    <div className="relative play px-2 flex my-2 gap-2 items-center">
                               
                                <CartIcon />
                       
                    </div>
          </div>
          <nav className=" space-y-3 text-3xl play flex px-2 flex-col justify-start float-left  w-full">
                    <Link href="/">
                    <p className=" play">Acceuil</p>
                    </Link>
                    <Link href="/admin">
                    <p className=" play">Admin</p>
                    </Link>
                    <Link href="/freestyle1">
                    <p className=" play">Shop</p>
                    </Link>
                    <Link href="/adhesion">
                    <p className=" play">Adhesion</p>
                    </Link> 
                    <Link href="/player/contact-admin">
                    <p className=" play">Contact</p>
                    </Link>  

             </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;