
// import { Filter, Search } from 'lucide-react';
// import Link from 'next/link';
// import { useState } from 'react';

// export default function ProductFilter({ categories, onFilter }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const [sortOption, setSortOption] = useState('');
//   const [isSortOpen, setIsSortOpen] = useState(false);


//   const handleSearch = () => {
//     onFilter(searchTerm, selectedCategory);
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category === selectedCategory ? '' : category);
//     onFilter(searchTerm, category === selectedCategory ? '' : category);
//   };


//   const handleSortChange = (option) => {
//     setSortOption(option);
//     onFilter(searchTerm, option);
//     setIsSortOpen(false); // Close pop-up after selecting an option
//   };

//   return (
//     <div className="fle flex-col  md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">

// <div className="flex gap-2 items-center px-3">
//       <input
//         type="text"
//         placeholder="Search products"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="p-2 border rounded-lg w-full md:w-1/3"
//       />
    
//       <button
//         onClick={handleSearch}
//         className="p-2 bg-gray-500 rounded-full text-white bg-opacity-25 blue-600"
//       >
//         <Search/>
//       </button>
//    </div>

//        {/* Category Slider */}
//        <div className="relative w-full overflow-hidden md:w-full">
//         <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white pointer-events-none"></div>
//           <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white pointer-events-none"></div>    
//             <div className="flex overflow-x-auto hide-scrollbar space-x-2" style={{ scrollSnapType: 'x mandatory' }}>
//                 {categories.map((category) => (
//             // <Link key={category} href={`/category/${category.toLowerCase()}`}>
//               <button   key={category}
//             onClick={() => handleCategoryClick(category)}
//             className={`h-9  px-3 rounded-full w block ${
//               selectedCategory === category
//                 ? 'bg-blue-500 bg-opacity-15 text-blue-500 rounded-full   '
//                 : 'bg-gray-200 rounded-full  '
//             } hover:bg-blue-400 hover:text-white`}
//           >
//             <div className="w-max">
//             {category}
//             </div>

               
//               </button>
//             // </Link>
//           ))}
//         </div>
//       </div>

//       {/* Sort Button and Pop-up */}
//       <div className="relative  flex justify-end px-3">
//         <button
//           onClick={() => setIsSortOpen(!isSortOpen)}
//           className="p-2 flex bg-gray-200 rounded-lg hover:bg-gray-300"
//         >
//           Sort
//           <Filter/>
//         </button>
        
//         {isSortOpen && (
//           <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//             <button
//               onClick={() => handleSortChange('a-z')}
//               className="block w-full text-left p-2 hover:bg-gray-100"
//             >
//               A-Z
//             </button>
//             <button
//               onClick={() => handleSortChange('z-a')}
//               className="block w-full text-left p-2 hover:bg-gray-100"
//             >
//               Z-A
//             </button>
//             <button
//               onClick={() => handleSortChange('price-asc')}
//               className="block w-full text-left p-2 hover:bg-gray-100"
//             >
//               Price: Low to High
//             </button>
//             <button
//               onClick={() => handleSortChange('price-desc')}
//               className="block w-full text-left p-2 hover:bg-gray-100"
//             >
//               Price: High to Low
//             </button>
//           </div>
//         )}</div>
//     </div>
//   );
// }

import { Filter, Search } from 'lucide-react';
import { useState } from 'react';

export default function ProductFilter({ categories, onFilter, onSort }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleSearch = () => {
    onFilter(searchTerm, selectedCategory, sortOption);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
    onFilter(searchTerm, category === selectedCategory ? '' : category, sortOption);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    onFilter(searchTerm, selectedCategory, option);
    setIsSortOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
      {/* Search */}
      <div className="flex gap-2 items-center px-3">
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-lg w-full md:w-1/3"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-gray-500 rounded-full text-white"
        >
          <Search />
        </button>
      </div>

      {/* Category Slider */}
      {/* <div className="flex overflow-x-auto hide-scrollbar space-x-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`h-9 px-3 rounded-full ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div> */}

<div className="relative w-full overflow-hidden md:w-full">
         <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white pointer-events-none"></div>
           <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white pointer-events-none"></div>    
            <div className="flex overflow-x-auto hide-scrollbar space-x-2" style={{ scrollSnapType: 'x mandatory' }}>
                 {categories.map((category) => (
            // <Link key={category} href={`/category/${category.toLowerCase()}`}>
              <button   key={category}
            onClick={() => handleCategoryClick(category)}
            className={`h-9  px-3 rounded-full w block ${
              selectedCategory === category
                ? 'bg-blue-500 bg-opacity-15 text-blue-500 rounded-full   '
                : 'bg-gray-200 rounded-full  '
            } hover:bg-blue-400 hover:text-white`}
          >
            <div className="w-max">
            {category}
            </div>

               
              </button>
            // </Link>
          ))}
        </div>
      </div>

      {/* Sort Button and Pop-up */}
      <div className="relative flex justify-end px-3">
        <button
          onClick={() => setIsSortOpen(!isSortOpen)}
          className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Sort <Filter />
        </button>
        {isSortOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <button
              onClick={() => handleSortChange('a-z')}
              className="block w-full text-left p-2 hover:bg-gray-100"
            >
              A-Z
            </button>
            <button
              onClick={() => handleSortChange('z-a')}
              className="block w-full text-left p-2 hover:bg-gray-100"
            >
              Z-A
            </button>
            <button
              onClick={() => handleSortChange('price-asc')}
              className="block w-full text-left p-2 hover:bg-gray-100"
            >
              Price: Low to High
            </button>
            <button
              onClick={() => handleSortChange('price-desc')}
              className="block w-full text-left p-2 hover:bg-gray-100"
            >
              Price: High to Low
            </button>
          </div>
        )}
      </div>
    </div>
  );
}