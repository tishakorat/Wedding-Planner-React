import React, { useEffect, useState } from 'react';
import titleImage from '../image/divider_title.webp'

const foodData = {
  food: [
    {
      path: 1,
      avatar: "https://i.ibb.co/JjH6kLJ/c5.jpg",
      name: "Vintage Blossom Cake",
      price: "$20.00",
    },
    {
      path: 2,
      avatar: "https://i.ibb.co/mtFmWMY/c7.jpg",
      name: "Fruit Cake",
      price: "$22.00",
    },
    {
      path: 3,
      avatar: "https://i.ibb.co/Q8TyW10/c8.jpg",
      name: "3tier Fruit Cake",
      price: "$18.00",
    },
    {
      path: 4,
      avatar: "https://i.ibb.co/7ttVps0/c9.jpg",
      name: "Butter Cream Cake",
      price: "$21.00",
    },
    {
      path: 5,
      avatar: "https://i.ibb.co/pdScCnN/c10.jpg",
      name: "Pastel Shades Cake",
      price: "$20.00",
    },
    {
      path: 6,
      avatar: "https://i.ibb.co/FJHWz77/c11.jpg",
      name: "Lemon Cake",
      price: "$19.00",
    },
    {
      path: 7,
      avatar: "https://i.ibb.co/TR7xNC2/c12.jpg",
      name: "Flower Cake",
      price: "$23.00",
    },
    {
      path: 8,
      avatar: "https://i.ibb.co/4thL1Q2/c13.jpg",
      name: "Lemon Chocolate Cake",
      price: "$22.00",
    },
    {
      path: 9,
      avatar: "https://i.ibb.co/6bF28S9/c14.jpg",
      name: "Fruit & Flower Cake",
      price: "$24.00",
    },
    {
      path: 10,
      avatar: "https://i.ibb.co/0qjjdg5/c15.jpg",
      name: "Royal Flower Cake",
      price: "$27.00",
    },
    {
      path: 11,
      avatar: "https://i.ibb.co/StDKPBM/c16.jpg",
      name: "Regular Fruit Cake",
      price: "$20.00",
    },
    {
      path: 12,
      avatar: "https://i.ibb.co/0sfbkHX/c17.jpg",
      name: "Royal Alencon Cake",
      price: "$30.00",
    },
    {
      path: 13,
      avatar: "https://i.ibb.co/YjtJn5c/d1.jpg",
      name: "Fruit Juice",
      price: "$10.00",
    },
    {
      path: 14,
      avatar: "https://i.ibb.co/q9p37Jx/d2.jpg",
      name: "Lemon Juice",
      price: "$9.00",
    },
    {
      path: 15,
      avatar: "https://i.ibb.co/D4mXjQN/d3.jpg",
      name: "Lemon-Mocktail",
      price: "$5.00",
    },
    {
      path: 16,
      avatar: "https://i.ibb.co/1q01ChQ/d4.jpg",
      name: "Strawberry-Mocktail",
      price: "$15.00",
    },
    {
      path: 17,
      avatar: "https://i.ibb.co/NgRMVvp/d5.jpg",
      name: "Blueberry-Cocktail",
      price: "$12.00",
    },
    {
      path: 18,
      avatar: "https://i.ibb.co/SQXfcbR/d6.jpg",
      name: "Cherry-Mocktail",
      price: "$10.00",
    },
    {
      path: 19,
      avatar: "https://i.ibb.co/dKX7NG4/d7.jpg",
      name: "Lemon-Cocktail",
      price: "$6.00",
    },
    {
      path: 20,
      avatar: "https://i.ibb.co/c80CG3j/d8.jpg",
      name: "Guava Juice",
      price: "$12.00",
    },
    {
      path: 21,
      avatar: "https://i.ibb.co/bJkp1Ty/d9.jpg",
      name: "Apple Juice",
      price: "$10.00",
    },
    {
      path: 22,
      avatar: "https://i.ibb.co/MGhGcJP/d10.jpg",
      name: "Pomegranate Juice",
      price: "$8.00",
    },
    {
      path: 23,
      avatar: "https://i.ibb.co/G9rSjgc/d11.jpg",
      name: "Lemon & Strawberry Juice",
      price: "$14.00",
    },
    {
      path: 24,
      avatar: "https://i.ibb.co/vB7cbr7/d12.jpg",
      name: "Raspberry-Mocktail",
      price: "$11.00",
    },
    {
      path: 25,
      avatar: "https://i.ibb.co/q0Y83SW/f1.jpg",
      name: "Unique Sweets",
      price: "$50.00",
    },
    {
      path: 26,
      avatar: "https://i.ibb.co/2tt6yvm/f3.jpg",
      name: "Antique Foods",
      price: "$47.00",
    },
    {
      path: 27,
      avatar: "https://i.ibb.co/phd3sHq/f4.jpg",
      name: "Main Platters",
      price: "$55.00",
    },
    {
      path: 28,
      avatar: "https://i.ibb.co/k37TFZp/f12.jpg",
      name: "Kesar Kumkum",
      price: "$55.00",
    },
    {
      path: 29,
      avatar: "https://i.ibb.co/SVDZ76M/f6.jpg",
      name: "Italian Pasta",
      price: "$49.00",
    },
    {
      path: 30,
      avatar: "https://i.ibb.co/1XrBJf8/f19.jpg",
      name: "Desserts",
      price: "$60.00",
    },
    {
      path: 31,
      avatar: "https://i.ibb.co/drmyKft/f7.jpg",
      name: "The Green Espana",
      price: "$45.00",
    },
    {
      path: 32,
      avatar: "https://i.ibb.co/VmvMQkV/f16.jpg",
      name: "Lasagna",
      price: "$61.00",
    },
    {
      path: 33,
      avatar: "https://i.ibb.co/z8jsgXS/f11.jpg",
      name: "Sweet Bread Pie",
      price: "$48.00",
    },
    {
      path: 34,
      avatar: "https://i.ibb.co/GxByCmC/f5.jpg",
      name: "Buffet Platter",
      price: "$40.00",
    },
    {
      path: 35,
      avatar: "https://i.ibb.co/0YbzHr9/f20.jpg",
      name: "Royal Sweets",
      price: "$63.00",
    },
    {
      path: 36,
      avatar: "https://i.ibb.co/KWC9xby/f18.jpg",
      name: "Italian Pizza",
      price: "$50.00",
    },
  ]
};

const Food = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    setFoods(foodData.food);
  }, []);

  const renderFoods = () => {
    return foods.map((food) => (
      <div className="col-6 col-md-4 col-lg-2 mt-4  wrapper" key={food.path}>
        <div>
          <img src={food.avatar} alt={food.name} className="img-fluid px-1 px-md-2" />
          <h5 className="mt-2 courgette-regular">{food.name}</h5>
          <h6>{food.price}</h6>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <section>
        <div className="container-fluid bg11">
          <div className="row">
            <div className="col-12">
              <h1 className="courgette-regular fs-10 text-white">Foods</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 pt-5">
              <div className="text-center">
                <h2 className="px-5 courgette-regular fs-lg-7 fs-30 pt-3 font1">
                  Wedding Foods and Drinks
                </h2>
                <p className="faustina py-2 color">SHOP</p>
                <img src={titleImage} alt="Divider" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid pb-5">
          <div className="row text-center justify-content-center">
            <div className="col-lg-12 mt-5 flex">
              <div id="div" className="d-flex flex-wrap justify-content-center">
                {renderFoods()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Food;
