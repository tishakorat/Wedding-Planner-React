import React from 'react';
import sliderlogo from '../image/section-title2.png';


const slides = [
  {
    text: "We Will Make Your Wedding Perfect",
    imgSrc: sliderlogo,
  },
  {
    text: "We Will Make Your Wedding Perfect",
    imgSrc: sliderlogo,
  },
  {
    text: "We Will Make Your Wedding Perfect",
    imgSrc: sliderlogo,
  },
  {
    text: "We Will Make Your Wedding Perfect",
    imgSrc: sliderlogo,
  },
  {
    text: "We Will Make Your Wedding Perfect",
    imgSrc: sliderlogo,
  }
];

const Slider = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 slider">
          {slides.map((slide, index) => (
            <div key={index} className="slide img-fluid d-flex justify-content-center">
              <div className="text-center">
                <h1 className="text-white text-center courgette-regular v fs-sm-8 fs-lg-10">{slide.text}</h1>
                <div className="align-self-center align-content-center">
                  <img src={slide.imgSrc} alt={`Slide ${index + 1}`} className="pb-5 img-fluid" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
