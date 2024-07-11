import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import im1 from '../image/visa.png'
import im2 from '../image/logo3.png'
import im3 from '../image/logo (1).png'
import im4 from '../image/paypal.png'

const Checkout = () => {
  return (
    <>
      <section>
        <div className="container-fluid bg3">
          <div className="row">
            <div className="col-12">
              <h1 className="courgette-regular fs-10 text-white">Check Out</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid">
        <div className="row pb-5">
          <div className="col-xl-8 col-lg-8">
            <div className="card bg-light">
              <div className="border border-secondary-subtle p-1 mt-5 ms-5 me-5 mb-3 d-flex justify-content-between faustina-text">
                <div>Have A Coupon? Click Here To Enter Your Code.</div>
                <div className="pe-2">+</div>
              </div>
              <div className="border border-secondary-subtle p-1 ms-5 me-5 mb-3 d-flex justify-content-between faustina-text">
                <div>Billing Address</div>
                <div className="pe-2">+</div>
              </div>
              <div className="border border-secondary-subtle p-1 ms-5 me-5 mb-3 d-flex justify-content-between faustina-text">
                <div>Payment Method</div>
                <div className="pe-2">-</div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-check ms-5">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label faustina-text" htmlFor="flexRadioDefault1">
                      Payment By Card
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-check ms-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      defaultChecked
                    />
                    <label className="form-check-label faustina-text" htmlFor="flexRadioDefault2">
                      Cash On Delivery
                    </label>
                  </div>
                </div>
              </div>
              <div className="row ms-5 mt-4">
                <div className="col-6 col-md-3">
                  <img src={im1} alt="visa" className="img3 mb-3" />
                </div>
                <div className="col-6 col-md-3">
                  <img src={im2} alt="master" className="img3 mb-3" />
                </div>
                <div className="col-6 col-md-3">
                  <img src={im3} alt="skill" className="img3 mb-3" />
                </div>
                <div className="col-6 col-md-3">
                  <img src={im4} alt="paypal" className="img3 mb-3" />
                </div>
              </div>
              <button className="m-5 border-0 text-white rounded-3 p-2 faustina-text clr">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-xl-4">
            <div className="card1 bg-light">
              <h3 className="pt-4 ps-4 pb-4 courgette-regular">Cart Total</h3>
              <div className=" pb-2 ps-4 mb-4 ms-3 border-bottom faustina-text" style={{ borderColor: '#4A6360' }}>
                <div>Total Item</div>
              </div>
              <div className=" pb-2 ps-4 mb-4 ms-3 border-bottom faustina-text" style={{ borderColor: '#4A6360' }}>
                Sub Price
              </div>
              <h5 className="pb-2 ms-3 ps-4 faustina-text">Total Price</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
