import fs from 'fs';
import path from 'path';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import ProductList from '../../components/ProductList';
import Header from '@/components/Header';
import Link from 'next/link';

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

  return (
    <div className=" max-w-[789px] mx-auto">
        <div className="flex mb-3">
            <Link href="/">
                <span>Home</span>/
            </Link>
            <Link href="/products">
                <span>produits</span>/
            </Link>
        <p className="">
        {category.charAt(0).toUpperCase() + category.slice(1)}     </p>
            {/* <span>{product.category}</span>/ */}
        </div>
      <h1 className="text-3xl font-bold text-center mb-6">
        Products in "{category.charAt(0).toUpperCase() + category.slice(1)}"
      </h1>
      <ProductList products={currentItems} />
      <ReactPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="Previous"
        nextLabel="Next"
        containerClassName="flex justify-center mt-6 space-x-2"
        pageClassName="p-2 bg-gray-200 rounded-lg"
        activeClassName="bg-blue-500 text-white"
        previousClassName="p-2 bg-gray-200 rounded-lg"
        nextClassName="p-2 bg-gray-200 rounded-lg"
        disabledClassName="text-gray-400"
      />
    </div>
  );
}