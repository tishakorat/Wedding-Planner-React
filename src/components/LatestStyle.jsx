import React from 'react';
import titleImage from '../image/divider_title.webp';

const latestStyles = [
  {
    path: 1,
    avatar: 'https://i.ibb.co/jhL1416/s1.jpg',
    name: 'Flower Decor',
    price: '$55.00',
  },
  {
    path: 2,
    avatar: 'https://i.ibb.co/NpPGZTZ/s22.webp',
    name: 'Love Balloons',
    price: '$65.00',
  },
  {
    path: 3,
    avatar: 'https://i.ibb.co/YRxVX9F/s3.jpg',
    name: 'Vintage Metal Cake Stand',
    price: '$57.00',
  },
  {
    path: 4,
    avatar: 'https://i.ibb.co/BnVsTHY/s4.jpg',
    name: 'Wedding Bouquet',
    price: '$112.00',
  },
  {
    path: 5,
    avatar: 'https://i.ibb.co/WcWjYtP/s2.jpg',
    name: 'Wedding Candles',
    price: '$45.00',
  },
  {
    path: 6,
    avatar: 'https://i.ibb.co/L6j8LZL/s6.jpg',
    name: 'Wedding Lighted Signs',
    price: '$130.00',
  },
];

const LatestStylesSection = () => {
  return (
    <div>
      <section className="pt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h2 className="px-5 courgette-regular fs-lg-7 fs-30 pt-3 font1" style={{ fontWeight: 'normal' }}>
                  Shop Our Latest Styles
                </h2>
                <p className="faustina py-2 color">SHOP</p>
                <img src={titleImage} alt="Divider" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="latestStylesSection">
        <div className="container">
          <div className="row pb-5 text-center justify-content-center">
            <div className="col-lg-12 mt-5 d-flex flex-wrap justify-content-center">
              {latestStyles.map((style) => (
                <div className="col-lg-4 col-md-6 col-12 mt-4" key={style.path}>
                  <div className="text-center">
                    <img
                      src={style.avatar}
                      alt=""
                      className="img-fluid px-5 px-sm-2 img img2"
                      width="350"
                      height="400"
                    />
                    <h4 className="pt-4 courgette-regular">{style.name}</h4>
                    <h5 className="faustina p-3 color ">{style.price}</h5>
                    <div className="d-flex justify-content-center">
                      <a id="cubic" href="#">
                        <button title="Add To Cart">Shop Now</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestStylesSection;

