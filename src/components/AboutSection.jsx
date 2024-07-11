import React from 'react';
import vectorSmartObject from '../image/vector-smart-object-copy-12.webp';
import aboutImage from '../image/about.jpg';
import backgroundImage from '../image/1.jpg'; 
import {Route} from "react-router-dom";
import About from '../pages/About';

const AboutSection = () => {
  return (
    <div
      className="container-fluid bg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '900px'
      }}
       >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <div className="row">
                <div className="col-12 col-md-6 pt-sm-0 pt-md-5">
                  <div>
                    <p className="faustina color pt-sm-1 pt-md-5">ABOUT US</p>
                    <h2 className="courgette-regular fs-sm-5 fs-lg-7 py-1 py-lg-4" style={{ fontWeight: 'normal' }}>
                      We Plan & Design Weddings That Capture the Imagination
                    </h2>
                  </div>
                  <img
                    src={vectorSmartObject}
                    alt=""
                    className="pb-2 pb-lg-4"
                  />
                  <p className="faustina text-secondary fw-4 pb-1 pb-lg-5 font-normal">
                    Weddings are significant events in people’s lives and as such, couples are often willing to spend
                    considerable amount of money to ensure that their weddings are well-organized. Wedding planners
                    are often used by couples who work long hours and have little spare time available for sourcing and
                    managing wedding venues.
                  </p>
                  <a id="cubic" href={<Route path="/about" element={<About />} />}>
                    <button title="More About Us">About Us</button>
                  </a>
                </div>
                <div className="col-12 col-md-6 pt-sm-2 pt-md-5">
                  <div className="pt-4 pt-md-5 text-center justify-content-center align-items-center">
                    <img
                      src={aboutImage}
                      className="img-fluid Sirv image-main"
                      alt=""
                      height="500px"
                      width="450px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

