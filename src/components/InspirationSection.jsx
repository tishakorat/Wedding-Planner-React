import React from 'react';

const InspirationSection = () => {
  return (
    <section className="pb-5 pt-5 inspiration-section">
      <div className="container-fluid bg-secondary-subtle">
        <div className="row">
          <div className="col-12 col-md-6 bg-image">
            {/* Background image is set via CSS */}
          </div>
          <div className="col-12 col-md-6 pt-sm-1 pt-md-5 pe-1 pe-lg-5">
            <div className="pt-1 pe-1 pe-lg-1 pt-sm-0 pt-md-5">
              <p className="faustina color ps-sm-1 ps-xl-5">INSPIRATION</p>
              <h2 className="courgette-regular fs-sm-5 fs-lg-7 py-1 py-lg-4 ps-sm-1 ps-xl-5">
                Exclusive Design by Best Florists
              </h2>
            </div>
            <p className="faustina text-secondary fw-4 pb-1 pb-xl-5 ps-sm-1 ps-xl-5 pe-1 pe-lg-5 font-normal">
              Weddings are significant events in people’s lives and as such, couples are often willing to spend
              considerable amount of money to ensure that their weddings are well-organized. Wedding planners are
              often used by couples who work long hours and have little spare time available for sourcing and managing
              wedding venues.
            </p>
            <a id="cubic" href="./portfolio.html">
              <button title="GALLERY" className="ms-sm-1 ms-xl-5 mb-1 mb-lg-5">
                VISIT GALLERY
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
