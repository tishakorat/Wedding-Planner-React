import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const porthfolios = {
      porthfolio: [
        { path: 1, avatar: 'https://i.ibb.co/PNyZCGM/001.jpg' },
        { path: 2, avatar: 'https://i.ibb.co/sPkSCHD/002.jpgg' },
        { path: 3, avatar: 'https://i.ibb.co/KhMBFQR/003.jpg' },
        { path: 4, avatar: 'https://i.ibb.co/6B2DYw7/004.jpg' },
        { path: 5, avatar: 'https://i.ibb.co/vJF6D4y/005.jpg' },
        { path: 6, avatar: 'https://i.ibb.co/Z241FYj/006.jpg' },
        { path: 7, avatar: 'https://i.ibb.co/vs6hrq8/007.jpg' },
        { path: 8, avatar: 'https://i.ibb.co/2nhKgdH/008.jpg' },
        { path: 9, avatar: 'https://i.ibb.co/kHNDBdv/009.jpg' },
        { path: 10, avatar: 'https://i.ibb.co/108RwSt/010.jpg' },
        { path: 11, avatar: 'https://i.ibb.co/nbgy9gH/011.jpg' },
        { path: 12, avatar: 'https://i.ibb.co/stpXmQn/012.jpg' },
      ],
    };

    setPortfolios(porthfolios.porthfolio);
  }, []);

  return (
    <div>
      <div className="container-fluid bg15">
        <div className="row">
          <div className="col-12">
            <div className="position-absolute top-50 start-50 translate-middle">
              <p className="font">Portfolio</p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container-fluid pb-5">
          <div className="row text-center justify-content-center pb-3">
            <div className="col-lg-12 mt-5 flex">
              <div className="d-flex flex-wrap justify-content-center">
                {portfolios.map((porth, index) => (
                  <div className="col-lg-3 col-sm-6 col-12 mt-4" key={index}>
                    <div>
                      <img
                        src={porth.avatar}
                        alt=""
                        className="img-fluid img px-1"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
