import React, { useState, useEffect } from 'react';

// Dummy shop data
let shops =  {shop : [
  {
      "path":1,
      "avatar":"https://i.ibb.co/n6PYkwg/1-1.jpg",
      "name":"Wedding Gown",
      "price":"$340.00",
  },
  {
      "path":2,
      "avatar":"https://i.ibb.co/wYcvhjV/Wedding-2.jpg",
      "name":" Bridal Flower",
      "price":"$65.00",
  },
  {
      "path":3,
      "avatar":"https://i.ibb.co/nwHjdFM/3.jpg",
      "name":"Bride's Shoes",
      "price":"$280.00",
  },
  {
      "path":4,
      "avatar":"https://i.ibb.co/GcHWGv9/4.jpg",
      "name":"Wedding Cake",
      "price":"$176.00",
  },
  {
      "path":5,
      "avatar":"https://i.ibb.co/kV7D08J/5.jpg",
      "name":"Bride's Crown",
      "price":"$125.00",
  },
  {
      "path":6,
      "avatar":"https://i.ibb.co/rbzgNvn/6.jpg",
      "name":"Wedding Ring",
      "price":"$548.00",
  },
  {
      "path":7,
      "avatar":"https://i.ibb.co/xJVPJ3R/7.jpg",
      "name":"Groom's Shoes",
      "price":"$380.00",
  },
  {
      "path":8,
      "avatar":"https://i.ibb.co/N22WhjC/8.jpg",
      "name":"Hair Style",
      "price":"$290.00",
  },
  {
      "path":9,
      "avatar":"https://i.ibb.co/4gmDYTc/9.jpg",
      "name":"Bridal Flower",
      "price":"$65.00",
  },
  {
      "path":10,
      "avatar":"https://i.ibb.co/SJrfqHt/10.jpg",
      "name":"Groom's Suit",
      "price":"$285.00",
  },
  {
      "path":11,
      "avatar":"https://i.ibb.co/bd8Fp0v/11.jpg",
      "name":"Groom's Watch",
      "price":"$165.00",
  },
  {
      "path":12,
      "avatar":"https://i.ibb.co/F5Qb7Y0/12.jpg",
      "name":"Bride's Ring",
      "price":"$125.00",
  },
]}

const Shop= () => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    setShopData(shops.shop);
  }, []);
console.log(shopData,'shopdata');
  return (
    <>
    <section>
        <div className="container-fluid bg1">
          <div className="row">
            <div className="col-12">
              <h1 className="courgette-regular fs-10 text-white">Shop</h1>
            </div>
          </div>
        </div>
      </section>
    <section className="pb-5">
      <div className="container d-flex justify-content-center">
        <div className="row text-center d-flex justify-content-center">
          <div className="col-lg-12 mt-5 flex">
            <div className="d-flex flex-wrap justify-content-center align-items-center align-content-center">
              {shopData?.map((sho) =>
                (sho.path % 2 === 0?(
                  <div key={sho.path} className="col-12 col-sm-12 col-md-6 col-lg-3 mt-4">
                    <div className="boxr bg-white">
                      <img src={sho.avatar} alt={sho.name} className="img-fluid px-1 px-md-2 box-imgr" />
                      <h5 className="mt-2 courgette-regular">{sho.name}</h5>
                      <h6>{sho.price}</h6>
                    </div>
                  </div>
                ):
                (
                  <div key={sho.path} className="col-12 col-sm-12 col-md-6 col-lg-3 mt-4">
                    <div className="box bg-white">
                      <img src={sho.avatar} alt={sho.name} className="img-fluid px-1 px-md-2 box-img" />
                      <h5 className="mt-2 courgette-regular">{sho.name}</h5>
                      <h6>{sho.price}</h6>
                    </div>
                  </div>
                )))}
            
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Shop;