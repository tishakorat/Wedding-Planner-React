import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  return (
    <>
      <section className="pb-5">
        <div className="container-fluid bg6 ">
          <div className="row">
            <div className="col-12">
              <h1 className="courgette-regular fs-10 text-white">Cart</h1>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '100px' }} className='pt-5'>
        <div className="container">
          <div className="box1 shadow-lg">
            <div style={{ marginBottom: '10px' }}>
              <div className="row">
                <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                  <div className="d-flex justify-content-center">
                    <div className="padd">
                      <h6>Image</h6>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                  <div className="d-flex justify-content-center">
                    <div className="padd">
                      <h6>Product Name</h6>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                  <div className="d-flex justify-content-center">
                    <div className="padd">
                      <h6>Quantity</h6>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                  <div className="d-flex justify-content-center">
                    <div className="padd">
                      <h6>Price</h6>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                  <div className="d-flex justify-content-center">
                    <div className="padd">
                      <h6>Total Price</h6>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                  <div className="d-flex justify-content-center">
                    <div className="padd">
                      <h6>Action</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="d-flex justify-content-end padd">
                <button className="btn colr" style={{ marginRight: '10px' }}>
                  <div>
                    <h6>Continue Shopping</h6>
                  </div>
                </button>
                <button className="btn btn-dark">
                  <div className="text-light">
                    <h6>Update Cart</h6>
                  </div>
                </button>
              </div>
            </div>
            <hr />
            <div>
              <div className="row">
                <div className="col-6 padd">
                  <div className="text-dark">
                    <h6>Total Product</h6>
                  </div>
                </div>
                <div className="col-6 padd">
                  <div className="text-dark justify-content-end d-flex">
                    <h6>(0)</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 padd">
                  <div className="text-dark">
                    <h6>Sub Price</h6>
                  </div>
                </div>
                <div className="col-6 padd">
                  <div className="text-dark justify-content-end d-flex">
                    <h6>$0</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 padd">
                  <div className="text-dark">
                    <h6>Vat</h6>
                  </div>
                </div>
                <div className="col-6 padd">
                  <div className="text-dark justify-content-end d-flex">
                    <h6>$0</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 padd">
                  <div className="text-dark">
                    <h6>Eco Tax</h6>
                  </div>
                </div>
                <div className="col-6 padd">
                  <div className="text-dark justify-content-end d-flex">
                    <h6>$0</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 padd">
                  <div className="text-dark">
                    <h6>Delivery Charge</h6>
                  </div>
                </div>
                <div className="col-6 padd">
                  <div className="text-dark justify-content-end d-flex">
                    <h6>$0</h6>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="row">
                <div className="col-6 padd">
                  <div style={{ color: '#6b8985' }}>
                    <h6>Total Price</h6>
                  </div>
                </div>
                <div className="col-6 padd">
                  <div className="justify-content-end d-flex" style={{ color: '#6b8985' }}>
                    <h6>$0</h6>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="justify-content-end d-flex padd">
              <button className="btn colr" style={{ marginRight: '10px' }}>
                <div>
                  <h6>Proceed To Checkout</h6>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
