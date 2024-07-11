import React from 'react';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';

const About = () => {
    return (
      <>
      <section className="pb-5">
        <div className="container-fluid bg4">
          <div className="row">
            <div className="col-12">
              <h1 className="courgette-regular fs-10 text-white ">About us</h1>
            </div>
          </div>
        </div>
      </section>
       <AboutSection/>
       <GallerySection/>
      </>
    );
  };
  
  export default About;