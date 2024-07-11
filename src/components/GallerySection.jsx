import React from 'react';

const GallerySection = () => {
  return (
    <section className="pt-5 pb-5">
      <div className="container-fluid bg2">
        <div className="row">
          <div className="col-12 text-center pt-4">
            <h2 className="courgette-regular text-white fs-sm-5 fs-lg-8 pt-5">
              Let Us Make Your Wedding Flawless
            </h2>
          </div>
          <div className="col-12 d-flex justify-content-center mt-5">
            <a id="cubic" href="./gallary.html">
              <button title="GALLERY" className=" ms-sm-1 ms-xl-5 mb-1 mb-lg-5 mt-5">
                VISIT GALLERY
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;


