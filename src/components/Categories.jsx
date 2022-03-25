import React from "react";
import {Link} from 'react-router-dom';
import category1 from "../assets/category1.png";
import category2 from "../assets/category2.png";
import category3 from "../assets/category3.png";
import category4 from "../assets/category4.png";
import category5 from "../assets/category5.png";
import category6 from "../assets/category6.png";
import category7 from "../assets/category7.png";
import category8 from "../assets/category8.png";

function Categories() {
  const categories = [
    {
      image: category3,
      title: "Laptop",
      description: "290K Items",
    },
    {
      image: category2,
      title: "Phone Screen",
      description: "3M Items",
    },
    {
      image: category3,
      title: "Desktop",
      description: "1.2M Items",
    },
    {
      image: category5,
      title: "Photography",
      description: "1.0M Items",
    },
  ];

  return (
    <div className="categories-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Categories</h2>
        </div>
        <div className="categories">
          {categories.map(({ image, title, description }, index) => {
            return (
              <div className="category" key={index}>
                <img src={image} alt="Category" />
                <h4>{title}</h4>
              </div>
            );
          })}
        </div>
        <Link to='/products'>
        <button>Show All</button>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
