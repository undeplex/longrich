import { useState } from 'react';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import Link from 'next/link';
import ProductList from '@/components/ProductList';

export async function getServerSideProps(context) {
  const { tag } = context.params;
  const products = require('../../data/products.json');
  const filteredProducts = products.filter((product) => product.tags.includes(tag));
  return { props: { filteredProducts, tag } };
}

export default function TagPage({ filteredProducts, tag }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredProducts.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className=" py-8 max-w-5xl mx-auto">
      <h1 className="text-xl font-bold mb-6 px-3">Voici les produits reliés au mot clé "{tag}"</h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((product) => (
          
          <div key={product.name} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <img src={product.image} width="239"/>
            <p className="text-gray-600">{product.description}</p>
            <p className="font-bold">Price: ${product.price}</p>
            <Link href={`/products/${encodeURIComponent(product.name || 'undefined-product')}`}>
GO ON NOW</Link>
          </div>
        ))}
      </div> */}      <ProductList products={currentItems} />


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
