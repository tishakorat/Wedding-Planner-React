import React, { useEffect, useState } from 'react';
import titleImage from '../image/divider_title.webp'

const decorationData = {
  decoration: [
    {
      path: 1,
      avatar: "https://i.ibb.co/FxSGR8H/e1.jpg",
      name: "Dinning Decoration",
      price: "$15,000.00",
    },
    {
      path: 2,
      avatar: "https://i.ibb.co/cTZF0VJ/e8.jpg",
      name: "Hotel Decoration",
      price: "$45,000.00",
    },
    {
      path: 3,
      avatar: "https://i.ibb.co/J3g5Qc6/e3.jpg",
      name: "Villa Decoration",
      price: "$40,000.00",
    },
    {
      path: 4,
      avatar: "https://i.ibb.co/5Kq01WS/e4.jpg",
      name: "Outside Decoration",
      price: "$50,000.00",
    },
    {
      path: 5,
      avatar: "https://i.ibb.co/1LDrzq0/e5.jpg",
      name: "Garden Decoration",
      price: "$45,000.00",
    },
    {
      path: 6,
      avatar: "https://i.ibb.co/09BbbSh/e6.jpg",
      name: "Resort Decoration",
      price: "$55,000.00",
    },
    {
      path: 7,
      avatar: "https://i.ibb.co/ykbwHrc/e7.jpg",
      name: "Lake Villa Decoration",
      price: "$52,000.00",
    },
    {
      path: 8,
      avatar: "https://i.ibb.co/vvFSw8q/e10.jpg",
      name: "Candles Decoration",
      price: "$60,000.00",
    },
    {
      path: 9,
      avatar: "https://i.ibb.co/Yh1ZKYN/e12.jpg",
      name: "Flower Decoration",
      price: "$30,000.00",
    },
    {
      path: 10,
      avatar: "https://i.ibb.co/9G343qw/e2.jpg",
      name: "Beach Decoration",
      price: "$45,000.00",
    },
    {
      path: 11,
      avatar: "https://i.ibb.co/FJLg5H5/e11.jpg",
      name: "Palace Decoration",
      price: "$75,000.00",
    },
    {
      path: 12,
      avatar: "https://i.ibb.co/gWZyKcd/e9.jpg",
      name: "Royal Decoration",
      price: "$1,00,000.00",
    },
  ],
};

const Decoration = () => {
  const [decorations, setDecorations] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    setDecorations(decorationData.decoration);
  }, []);

  const renderDecorations = () => {
    return decorations.map((decoration) => (
      <div className="col-6 col-md-4 col-lg-2 mt-4" key={decoration.path}>
        <div>
          <img src={decoration.avatar} alt={decoration.name} className="img-fluid px-1 px-md-2" />
          <h5 className="mt-2 courgette-regular">{decoration.name}</h5>
          <h6>{decoration.price}</h6>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <section>
        <div className="container-fluid bg10">
          <div className="row">
            <div className="col-12">
              <h1 className="courgette-regular fs-10 text-white">Decoration</h1>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 pt-5">
              <div className="text-center">
                <h2 className="px-5 courgette-regular fs-lg-7 fs-30 pt-3 font1">Wedding Planning</h2>
                <p className="faustina py-2 color">Decoration</p>
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
                {renderDecorations()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Decoration;
