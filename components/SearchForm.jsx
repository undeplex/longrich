import { useState } from "react";
import { useRouter } from 'next/router';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?q=${searchQuery}`);
};
const [searchQuery, setSearchQuery] = useState('');


  return (
    <div>
      <button
        className=""
        onClick={() => setIsOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-gray-700 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed w-full h-screen top-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white h-[400px] p-6 rounded shadow-lg max-w-md w-full relative transform transition-transform duration-300 scale-95 sm:scale-100">
          <div>
          <form onSubmit={handleSearch}>
                    <input
                            type="text"
                            value={searchQuery}
                            className="bg-transparent py-3 px-1 text-sm w-11/12"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search products..."
                        /> 

                         <button type="submit" className="bg-emerald-500 px-4 py-2 rounded-xl">
                            Search now
                        </button> 
          
          </form> 
          </div>
            <button
              className="absolute top-2 right-2 text-black hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              ✖️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;