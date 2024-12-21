// import React, { useState } from "react";

// const Filter = ({ categories, onCategoryChange }) => {
//   const [active, setActive] = useState("All");

//   const handleFilter = (category) => {
//     setActive(category);
//     onCategoryChange(category);
//   };

//   return (
//     <div className="d-flex justify-content-center mb-4">
//       {categories.map((category) => (
//         <button
//           key={category}
//           className={`btn btn-outline-primary mx-2 ${
//             active === category ? "active" : ""
//           }`}
//           onClick={() => handleFilter(category)}
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Filter;
