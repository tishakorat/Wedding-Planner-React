import React from 'react';
import bouquetImage1 from '../image/wedplan-thumb2.jpg';
import bouquetImage2 from '../image/wedplan-thumb3.jpg';
import bouquetImage3 from '../image/17.jpg';

const bouquetsData = [
  {
    image: bouquetImage1,
    title: "Bouquets",
    items: ["Bridal Bouquets", "Bridesmaids' Bouquets", "Coursages", "Boutonnieres"],
    price: "$399.00"
  },
  {
    image: bouquetImage2,
    title: "Ceremony Bouquets",
    items: ["Bride’s & Bridemaids’ Bouquets", "Corsages & Boutonnieres", "Ceremony Main Altar", "Aisle Pew Markers"],
    price: "$799.00"
  },
  {
    image: bouquetImage3,
    title: "Full Package",
    items: ["Bride’s & Bridemaids’ Bouquets", "Corsages & Boutonnieres", "Ceremony Decoration", "Tables & Cake Decoration"],
    price: "$999.00"
  }
];

const BouquetsSection = () => {
  return (
    <section className="pb-5">
      <div className="container">
        <div className="row pt-5">
          {bouquetsData.map((bouquet, index) => (
            <div className="col-12 col-md-4 pt-3" key={index}>
              <div className="bg-secondary-subtle text-center">
                <img src={bouquet.image} alt="" className="img-fluid" />
                <h4 className="py-5 courgette-regular text-black">{bouquet.title}</h4>
                {bouquet.items.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <p>{item}</p>
                    <div className="px-5">
                      <hr />
                    </div>
                  </React.Fragment>
                ))}
                <p className="py-4">From <b>{bouquet.price}</b></p>
                <a id="cubic" href="./service.html" className='d-flex justify-content-center pb-4'>
                  <button title="Add To Cart">Shop Now</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BouquetsSection;
