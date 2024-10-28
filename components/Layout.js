import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="">
      {/* Menu Bar */}
      <header className="top-0 z-50 left-0 fixed   w-full text-red-300 un border-b-2">
       <Header/>
      </header>

      {/* Main Content */}
      <main className=" mx-auto  min-h-screen mt-[50px] ">
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