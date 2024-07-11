import React, { useEffect, useState } from 'react';
import titleImage from '../image/divider_title.webp'

const bouquetData = {
  bokey: [
    {
      path: 1,
      avatar: "https://i.ibb.co/cQXgtZJ/b1.jpg",
      name: "Red Flower Bouquet",
      price: "$13.00",
    },
    {
      path: 2,
      avatar: "https://i.ibb.co/8dmS7z8/b2.jpg",
      name: "Big-Box Bouquet",
      price: "$11.00",
    },
    {
      path: 3,
      avatar: "https://i.ibb.co/pLjw8GF/b3.jpg",
      name: "Decoration Bouquet",
      price: "$10.00",
    },
    {
      path: 4,
      avatar: "https://i.ibb.co/spTs26T/b4.jpg",
      name: "Bridel Bouquet",
      price: "$14.00",
    },
    {
      path: 5,
      avatar: "https://i.ibb.co/qjxmjJm/b5.jpg",
      name: "Groom Bouquet",
      price: "$13.00",
    },
    {
      path: 6,
      avatar: "https://i.ibb.co/0sCcGbC/b6.jpg",
      name: "Simple Bouquet",
      price: "$10.00",
    },
    {
      path: 7,
      avatar: "https://i.ibb.co/VtLV1FB/b7.jpg",
      name: "Pink Bouquet",
      price: "$12.00",
    },
    {
      path: 8,
      avatar: "https://i.ibb.co/vwR3RRD/b8.jpg",
      name: "Pastel Bouquet",
      price: "$13.00",
    },
    {
      path: 9,
      avatar: "https://i.ibb.co/RTW2BYr/b9.jpg",
      name: "Unique Bouquet",
      price: "$15.00",
    },
    {
      path: 10,
      avatar: "https://i.ibb.co/vd9n0bH/b10.jpg",
      name: "Royal Red Rose",
      price: "$18.00",
    },
    {
      path: 11,
      avatar: "https://i.ibb.co/wcjSnHW/b11.jpg",
      name: "Mix Flower Bouquet",
      price: "$13.00",
    },
    {
      path: 12,
      avatar: "https://i.ibb.co/nPwGQym/b12.jpg",
      name: "Basket Bouquet",
      price: "$15.00",
    },
  ]
};

const Bouquet = () => {
  const [bouquets, setBouquets] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    setBouquets(bouquetData.bokey);
  }, []);

  const renderBouquets = () => {
    return bouquets.map((bouquet) => (
      <div className="col-6 col-md-4 col-lg-2 mt-4  wrapper" key={bouquet.path}>
        <div>
          <img src={bouquet.avatar} alt={bouquet.name} className="img-fluid px-1 px-md-2" />
          <h5 className="mt-2 courgette-regular">{bouquet.name}</h5>
          <h6>{bouquet.price}</h6>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <section>
        <div className="container-fluid bg8">
          <div className="row">
            <div className="col-12">
              <h1 className="courgette-regular fs-10 text-white">Bouquets</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12 pt-5">
              <div className="text-center">
                <h2 className="px-5 courgette-regular fs-lg-7 fs-30 pt-3 font1">Bouquets & Style</h2>
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
                {renderBouquets()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bouquet;
