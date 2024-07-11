import React, { useEffect } from 'react';
import titleImage from '../image/divider_title.webp';

const provides = {
  provide: [
    {
      path: 1,
      image: 'https://i.ibb.co/fqNHvy4/l1.jpg',
    },
    {
      path: 2,
      image: 'https://i.ibb.co/BLjbdZK/l2.jpg',
    },
    {
      path: 3,
      image: 'https://i.ibb.co/FsX8fq1/l3.jpg',
    },
    {
      path: 4,
      image: 'https://i.ibb.co/2ntqW1y/l4.jpg',
    },
  ],
};

const ProvidesSection = () => {
  useEffect(() => {
    
  }, []);

  const displayProvides = (provide) => {
    return provide.map((pro) => (
      <div className="col-12 col-md-6 col-lg-3 mt-4" key={pro.path}>
        <div>
          <img src={pro.image} alt="" className="img-fluid px-1 px-md-2 img1" />
        </div>
      </div>
    ));
  };

  return (
    <section className="pt-2 pb-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h2 className="px-5 courgette-regular fs-lg-7 fs-30 pt-3 font1 font-normal">What We Provide</h2>
              <p className="faustina py-2 color">SHOP</p>
              <img src={titleImage} alt="Divider" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <section id="providesSection">
        <div className="container-fluid">
          <div className="row pt-5 pb-5 text-center justify-content-center">
            <div className="col-lg-12 mt-1 flex">
              <div id="providesDiv" className="d-flex flex-wrap justify-content-center">
                {displayProvides(provides.provide)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProvidesSection;
