import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import { ChevronDoubleLeftIcon } from '@heroicons/react/24/outline';
import { ArrowBigLeft, ArrowRight } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="">
      {/* Menu Bar */}
      <header className="top-0 z-50 left-0 fixed   w-full ">
      
       <Header/>
      </header>

      {/* Main Content */}
      <main className=" mx-auto  min-h-screen mt-[50px] md:mt-[90px] ">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 h-max ">
            <Footer/>
      </footer>
    </div>
  );
};

export default Layout;