import React, { useState } from "react";
import "../App.css";

const App = () => {
  const categories = [
    {
      name: "Fruits & Vegetables",
      items: Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `Fruit ${i + 1}`,
        price: (Math.random() * 10 + 1).toFixed(2),
        image: "https://via.placeholder.com/150",
      })),
    },
    {
      name: "Meat & Fish",
      items: Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `Meat ${i + 1}`,
        price: (Math.random() * 20 + 5).toFixed(2),
        image: "https://via.placeholder.com/150",
      })),
    },
    {
      name: "Snacks",
      items: Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `Snack ${i + 1}`,
        price: (Math.random() * 5 + 1).toFixed(2),
        image: "https://via.placeholder.com/150",
      })),
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="app-container">
      {/* Drawer Section */}
      <aside className="drawer">
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory.name === category.name ? "active" : ""
              }
            >
              {category.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Content Section */}
      <main className="content">
        <h2>{selectedCategory.name}</h2>
        <div className="card-container">
          {selectedCategory.items.slice(0, 50).map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;

