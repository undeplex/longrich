import fs from 'fs';
import path from 'path';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import ProductList from '../../components/ProductList';
import Header from '@/components/Header';
import Link from 'next/link';
import Home, { HomeIcon } from 'lucide-react'

export async function getServerSideProps({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);

  // Filter products by category slug
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === params.slug.toLowerCase()
  );

  return {
    props: {
      initialProducts: filteredProducts,
      category: params.slug,
    },
  };
}

export default function CategoryPage({ initialProducts, category }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(initialProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(initialProducts.length / itemsPerPage));
  }, [itemOffset, initialProducts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % initialProducts.length;
    setItemOffset(newOffset);
  };
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="py-8 max-w-5xl mx-auto">
        <div className="flex mb-3">
        <div className="breadcrumb-mockup px-3 text-[16px] bg w-max">
                <div className="flex items-center  ">
                    <a href="/">
                    
                    <HomeIcon className="size-4 text-gray-700"/>
                    </a>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <a href="/products">catalogue</a>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <a href="/products">categorie</a>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <p className="wma min-w-1w-max truncate flex  h-6 overflow-hidden">
                    {category.charAt(0).toUpperCase() + category.slice(1)}     </p>               
                   
                    
                </div>

                 </div>
    
            {/* <span>{product.category}</span>/ */}
        </div>
      <h1 className="text-xl font-bold text-center mb-6">
        Products in "{category.charAt(0).toUpperCase() + category.slice(1)}"
      </h1>
      <ProductList products={currentItems} />
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName="flex justify-center items-center mt-8"
        pageClassName="mx-1"
        pageLinkClassName="px-4 py-2 border rounded-md hover:bg-gray-100"
        previousLinkClassName="px-4 py-2 border rounded-md mr-2"
        nextLinkClassName="px-4 py-2 border rounded-md ml-2"
        activeLinkClassName="bg-blue-500 text-white"
      />
    </div>
  );
}