import React from 'react';
import title from '../image/divider_title.webp';

const weddings = [
  {
    path: 1,
    avatar: 'https://i.ibb.co/yNPgZv5/p1.jpg',
    name: 'Bouquets & Style',
  },
  {
    path: 2,
    avatar: 'https://i.ibb.co/gty4dNG/p2.jpg',
    name: 'Catering & Decoration',
  },
  {
    path: 3,
    avatar: 'https://i.ibb.co/mqyrFnZ/p3.jpg',
    name: 'Wedding Planning',
  },
];

const WeddingSection = () => {
  return (
    <div>
      <section className="pb-3 pt-5">
        <div className="container pt-3">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h2 className="px-5 courgette-regular fs-lg-7 fs-30 pt-3 font1 font-normal">Let's plan your perfect wedding</h2>
                <p className="faustina py-2 color">WELCOME</p>
                <img src={title} alt="title Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="weddingsSection">
        <div className="container">
          <div className="row pb-5 text-center justify-content-center">
            <div className="col-lg-12 mt-5 pb-5">
              <div id="weddingDiv" className="d-flex flex-wrap justify-content-center">
                {weddings.map((wed) => (
                  <div className="col-sm-4 col-12 mt-4" key={wed.path}>
                    <div className="text-center d-flex flex-column align-items-center">
                      <img
                        src={wed.avatar}
                        alt=""
                        className="img-fluid px-5 px-sm-2 im1 example"
                        width="350"
                        height="400"
                      />
                      <h4 className="pt-4 courgette-regular">{wed.name}</h4>
                      <a id="cubic" href="#" className="d-flex justify-content-center">
                        <button title="Add To Cart" className=" mt-2">Shop Now</button>
                      </a>
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

export default WeddingSection;

