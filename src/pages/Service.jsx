import React from 'react';
import divider from '../image/divider_title.webp'
import B1 from '../image/wedplan-thumb2.jpg'
import B2 from '../image/wedplan-thumb3.jpg'
import B3 from '../image/17.jpg'

const Service = () => {
      
    const data = {
        service : [
        {
            "path":1,
            "avatar":"https://i.ibb.co/J5mm5Sj/serv1.jpg",
            "name":"Wedding Dress",
            "contain":"Adipiscing sollicitudin tellus feugiat teger nisfacil nunc praesent morbi tes. Integer alemet senctus.",
        },
        {
            "path":2,
            "avatar":"https://i.ibb.co/c2vvdW7/serv2.jpg",
            "name":"Wedding Registry",
            "contain":"Adipiscing sollicitudin tellus feugiat teger nisfacil nunc praesent morbi tes. Integer alemet senctus.",
        },
        {
            "path":3,
            "avatar":"https://i.ibb.co/JQ1rr3w/serv3.jpg",
            "name":"Perfect Cake",
            "contain":"Adipiscing sollicitudin tellus feugiat teger nisfacil nunc praesent morbi tes. Integer alemet senctus.",
        },
        {
            "path":4,
            "avatar":"https://i.ibb.co/hR7q9Ss/serv4.jpg",
            "name":"Event Planning",
            "contain":"Adipiscing sollicitudin tellus feugiat teger nisfacil nunc praesent morbi tes. Integer alemet senctus.",
        },
        {
            "path":5,
            "avatar":"https://i.ibb.co/k4gTbgW/serv5.jpg",
            "name":"Photography",
            "contain":"Adipiscing sollicitudin tellus feugiat teger nisfacil nunc praesent morbi tes. Integer alemet senctus.",
        },
        {
            "path":6,
            "avatar":"https://i.ibb.co/KbSYsHJ/serv6.jpg",
            "name":"The Ceremony",
            "contain":"Adipiscing sollicitudin tellus feugiat teger nisfacil nunc praesent morbi tes. Integer alemet senctus.",
        },
    ]}

    return(
        <>
        <div className="container-fluid bg5">
          <div className="row">
            <div className="col-12">
              <h1 className="courgette-regular fs-10 text-dark">Service</h1>
            </div>
          </div>
        </div>
            <div className="container pt-5">
                <div className="row pt-3">
                    <div className="col-12">
                        <div className=" text-center">
                            <h2 className="px-5  courgette-regular fs-lg-7 fs-30 pt-3 font1 font-normal">What We Offer for you</h2>
                            <p className=" faustina py-2 color">Our Service</p>
                            <img src={divider} alt="" className=" img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-5">
                <div className="row text-center justify-content-center">
                    {
                        data.service.map((data) => (
                            <div className="col-12 col-md-6 col-lg-4 mt-4">
                                <div className="text-center ">
                                    <img src={data.avatar} alt="" className="img-fluid px-1 px-md-2 text-center  " style={{borderRadius : "50%" , height:"140px" , width : "150px"}}/>
                                </div>
                                <h5 className="mt-2 courgette-regular">{data.name}</h5>
                                <h6 className="faustina-text px-3">{data.contain}</h6>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="pb-5 pt-4">
          <div className="container ">
            <div className="row ">
              <div className="col-12 col-md-4 pt-5">
                <div className="bg-secondary-subtle text-center">
                  <img src={B1} alt="" className="img-fluid" />
                  <h4 className="py-5 courgette-regular text-black">Bouquets</h4>
                  <p>Bridal Bouquets</p>
                  <div className="px-5 ">
                    <hr />
                  </div>
                  <p>Bridesmaids' Bouquets</p>
                  <div className="px-5 ">
                    <hr />
                  </div>
                  <p>Coursages</p>
                  <div className="px-5 ">
                    <hr />
                  </div>
                  <p>Boutonnieres</p>
                  <div className="px-5 ">
                    <hr />
                  </div>
                  <p className="py-4">From <b>$399.00</b></p>
                  <a id="cubic" href="./Cartwedding.html" className="px-4 rounded-0 faustina mb-4 d-flex justify-content-center pb-4 pt-4">
                    <button title="Add To Cart">Shop Now</button>
                  </a>
                </div>
              </div>

              <div className="col-12 col-md-4 pt-5">
                <div className="bg-secondary-subtle text-center">
                  <img src={B2} alt="" className="img-fluid" />
                  <h4 className="py-5 courgette-regular text-black">Bouquets</h4>
                  <p>Bridal Bouquets</p>
                  <div className="px-5 ">
                    <hr />
                  </div>
                  <p>Bridesmaids' Bouquets</p>
                  <div className="px-5 ">
                    <hr />
                  </div>
                  <p>Coursages</p>
                  <div className="px-5 ">
                    <hr />
                  </div>
                  <p>Boutonnieres</p>
                  <div className="px-5 ">
                    <hr />
                  </div>
                  <p className="py-4">From <b>$399.00</b></p>
                  <a id="cubic" href="./Cartwedding.html" className="px-4 rounded-0 faustina mb-4 d-flex justify-content-center pb-4 pt-4">
                    <button title="Add To Cart">Shop Now</button>
                  </a>
                </div>
              </div>

              <div className="col-12 col-md-4 pt-5">
                <div className="bg-secondary-subtle text-center">
                  <img src={B3} alt="" className="img-fluid" />
                  <h4 className="py-5 courgette-regular text-black">Bouquets</h4>
                  <p>Bridal Bouquets</p>
                  <div className="px-5 ">
                    <hr />
                  </div>
                  <p>Bridesmaids' Bouquets</p>
                  <div className="px-5 ">
                    <hr />
                  </div>
                  <p>Coursages</p>
                  <div className="px-5 ">
                    <hr />
                  </div>
                  <p>Boutonnieres</p>
                  <div className="px-5 ">
                    <hr />
                  </div>
                  <p className="py-4">From <b>$399.00</b></p>
                  <a id="cubic" href="./Cartwedding.html" className="px-4 rounded-0 faustina mb-4 d-flex justify-content-center pb-4 pt-4" >
                    <button title="Add To Cart">Shop Now</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )

}

export default Service