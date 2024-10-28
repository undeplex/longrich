
// import { useEffect, useState } from 'react';
// import ReactPaginate from 'react-paginate';
// import fs from 'fs';
// import path from 'path';
// import ProductList from '../../components/ProductList';
// import ProductFilter from '../../components/ProductFilter';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// export async function getServerSideProps() {
//   const filePath = path.join(process.cwd(), 'data', 'products.json');
//   const jsonData = fs.readFileSync(filePath, 'utf-8');
//   const products = JSON.parse(jsonData);

//   const categories = Array.from(new Set(products.map((product) => product.category)));

//   return { props: { products, categories } };
// }

// export default function ProductsPage({ products, categories }) {
//   const [filteredProducts, setFilteredProducts] = useState(products);
//   const [currentItems, setCurrentItems] = useState([]);
//   const [pageCount, setPageCount] = useState(0);
//   const [itemOffset, setItemOffset] = useState(0);
//   const itemsPerPage = 10;

//   const handleFilter = (searchTerm, category) => {
//     let filtered = products;

//     if (category) {
//       filtered = filtered.filter((product) => product.category === category);
//     }

//     if (searchTerm) {
//       filtered = filtered.filter((product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.description.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     setFilteredProducts(filtered);
//     setItemOffset(0);
//   };

//   useEffect(() => {
//     const endOffset = itemOffset + itemsPerPage;
//     setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
//   }, [itemOffset, filteredProducts]);

//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
//     setItemOffset(newOffset);
//   };

//   return (
//     <div className=" max-w-[789px] mx-auto pt-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Catalogue de Produits </h1>
//       <ProductFilter categories={categories} onFilter={handleFilter} />
//       <ProductList products={currentItems} />
//       <ReactPaginate
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         marginPagesDisplayed={2}
//         pageCount={pageCount}
//         previousLabel="Previous"
//         nextLabel="Next"
//         containerClassName="flex justify-center mt-6 space-x-2"
//         pageClassName="bg-gray-200  size-12 rounded-full p-3 flex items-center justify-center"
//         activeClassName="bg-blue-500 text-white size-12 rounded-full p-3"
//         previousClassName="p-2 bg-gray-200 rounded-lg"
//         nextClassName="p-2 bg-gray-200 rounded-lg"
//         disabledClassName="text-gray-400"
//       />
//     </div>
//   );
// }
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import fs from 'fs';
import path from 'path';
import ProductList from '../../components/ProductList';
import ProductFilter from '../../components/ProductFilter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);

  const categories = Array.from(new Set(products.map((product) => product.category)));

  return { props: { products, categories } };
}

export default function ProductsPage({ products, categories }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;

  const handleFilter = (searchTerm, category, sortOption) => {
    setLoading(true);
    let filtered = products;

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption) {
      filtered = [...filtered].sort((a, b) => {
        if (sortOption === 'a-z') return a.name.localeCompare(b.name);
        if (sortOption === 'z-a') return b.name.localeCompare(a.name);
        if (sortOption === 'price-asc') return a.price - b.price;
        if (sortOption === 'price-desc') return b.price - a.price;
      });
    }

    setFilteredProducts(filtered);
    setItemOffset(0);
    setLoading(false);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
  }, [itemOffset, filteredProducts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="max-w-[789px] mx-auto pt-6">
      <h1 className="text-3xl font-bold text-center mb-6">Catalogue de Produits</h1>
      <ProductFilter categories={categories} onFilter={handleFilter} />
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <ProductList products={currentItems} />
      )}
      <ReactPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="Previous"
        nextLabel="Next"
        containerClassName="flex justify-center my-5 space-x-2"
        pageClassName="bg-gray-200 size-12 rounded-full p-3 flex items-center justify-center"
        activeClassName="bg-blue-500 text-white size-12 rounded-full p-1"
        previousClassName="px-2 grid place-content-center bg-gray-200 rounded-lg text-sm"
        nextClassName="px-2 grid place-content-center bg-gray-200 rounded-lg text-sm"
        disabledClassName="text-gray-400"
      />
      </div>
  );
}