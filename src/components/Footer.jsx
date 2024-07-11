import React from 'react'
import imglogo from '../image/logo.png';
import f1 from '../image/01.jpg';
import f2 from '../image/02.jpg';
import f3 from '../image/03.jpg';
import f4 from '../image/04.jpg';
import f5 from '../image/05.jpg';
import f6 from '../image/06.jpg';


function Footer() {
  return (
    <div>
      <div className="container-fluid bg-secondary-subtle">
        <div className="row">
          <div className="col-12 text-center pt-5 pb-5">
            <img src={imglogo} alt="BootstrapBrain Logo" width="150" height="60" />
          </div>
        </div>
        <div className="container pt-2">
          <hr className="border-secondary" />
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="text-center py-3">
                <h4 className="courgette-regular">Our Address</h4>
                <p className="faustina-text text-secondary fw-4">
                  Evanto HQ 24 Fifth st., Los Angeles, USA
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="text-center py-3">
                <h4 className="courgette-regular">Talk To Expert</h4>
                <p className="faustina-text text-secondary fw-4">
                  +1234 567 8910 or +1234 567 8911
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="text-center py-3">
                <h4 className="courgette-regular">Email Us</h4>
                <p className="faustina-text text-secondary fw-4">
                  example@yourdomain.com
                </p>
              </div>
            </div>
          </div>
        <hr className="border-secondary" />
        </div>

        <div className="container pt-5">
          <div className="row pb-4">
            <div className="col-12 col-md-6 col-lg-4 pt-2 pt-md-2">
              <div>
                <h4 className="courgette-regular">About WedCo</h4>
                <p className="faustina-text text-secondary fw-1 pe-2">
                  We’ve delivered fabulous wedding event experiences over the
                  last two decades and are now poised to chart out a whole new
                  growth story. We hosted for reputed company.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-2 pt-2 pt-md-2">
              <div>
                <h4 className="courgette-regular">Our Services</h4>
                <p className="faustina-text text-secondary fw-4">User Strategy</p>
                <p className="faustina-text text-secondary fw-4">Product Designing</p>
                <p className="faustina-text text-secondary fw-4">Marketing Strategy</p>
                <p className="faustina-text text-secondary fw-4">IT Consultancy</p>
                <p className="faustina-text text-secondary fw-4">Server Security</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 pt-2 pt-md-2">
              <div>
                <h4 className="courgette-regular">Wedding Planner Faqs</h4>
                <p className="faustina-text text-secondary fw-4">Why hire a planner?</p>
                <p className="faustina-text text-secondary fw-4">How can I make an appointment?</p>
                <p className="faustina-text text-secondary fw-4">How to choose a venue?</p>
                <p className="faustina-text text-secondary fw-4">Event catalogue?</p>
                <p className="faustina-text text-secondary fw-4">Payment type you accept</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 pt-2 pt-md-2">
              <div>
                <h4 className="courgette-regular">Instagram Gallery</h4>
              </div>
              <div className="row">
                <div className="col-4">
                  <img src={f1} alt="footer" height="85px" />
                </div>
                <div className="col-4">
                  <img src={f2} alt="footer" height="85px" />
                </div>
                <div className="col-4">
                  <img src={f3} alt="footer" height="85px" />
                </div>
              </div>
              <div className="row pt-2">
                <div className="col-4">
                  <img src={f4} alt="footer" height="85px" />
                </div>
                <div className="col-4">
                  <img src={f5} alt="footer" height="85px" />
                </div>
                <div className="col-4">
                  <img src={f6} alt="footer" height="85px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
