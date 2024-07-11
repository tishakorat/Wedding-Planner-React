import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    msg: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    msg: '',
  });

  const textRegex = /^[a-zA-Z]+$/;
  const numRegex = /^[0-9]{10}$/;
  const emaRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const pswdRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@^/%$#!&|]).{8,}$/;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    let isSuccess = true;
    let newErrors = {
      name: '',
      email: '',
      phone: '',
      password: '',
      msg: '',
    };

    if (formData.name === '') {
      newErrors.name = 'Please enter Name';
      isSuccess = false;
    } else if (!textRegex.test(formData.name)) {
      newErrors.name = 'Please enter only alphabets';
      isSuccess = false;
    }

    if (formData.phone === '') {
      newErrors.phone = 'Please enter phone number';
      isSuccess = false;
    } else if (!numRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter valid phone number';
      isSuccess = false;
    }

    if (formData.email === '') {
      newErrors.email = 'Please enter email';
      isSuccess = false;
    } else if (!emaRegx.test(formData.email)) {
      newErrors.email = 'Please enter valid email';
      isSuccess = false;
    }

    if (formData.password === '') {
      newErrors.password = 'Please enter password';
      isSuccess = false;
    } else if (!pswdRegex.test(formData.password)) {
      newErrors.password = 'Please enter a strong password (minimum 8 characters, at least one letter, one number, and one special character)';
      isSuccess = false;
    }

    if (formData.msg === '') {
      newErrors.msg = 'Please enter message';
      isSuccess = false;
    }

    setErrors(newErrors);
    return isSuccess;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      submitForm(formData);
    }
  };

  const submitForm = (formData) => {
    // Implement logic to submit form data (e.g., using AJAX)
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      msg: '',
    });
  };

  return (
    <div>
      <div className="container-fluid bg18">
        <div className="row">
          <div className="col-12">
            <div className="position-absolute top-50 start-50 translate-middle">
              <p className="fs-10 courgette-regular">Contact</p>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-5">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 shadow-lg boxxx text-center m-4">
              <div className="font">
                <div className="rounddd my-3 justify-content-center">
                  <i className="fa-solid fa-location-dot fs-2 m-3"></i>
                </div>
              </div>
              <h3 style={{ fontFamily: 'courgette' }}>Address</h3>
              <h6 className="fs-6">7 Green Lake Street</h6>
              <h6 className="fs-6">Crawfordsville, IN 47933</h6>
            </div>
            <div className="col-12 col-md-4 shadow-lg boxxx text-center m-4">
              <div className="font">
                <div className="rounddd my-3 justify-content-center">
                  <i className="fa-solid fa-envelope fs-2 m-3"></i>
                </div>
              </div>
              <h3 style={{ fontFamily: 'courgette' }}>About Us</h3>
              <h6 className="fs-6">Nozze@gmail.com</h6>
              <h6 className="fs-6">helloyou@gmail.com</h6>
            </div>
            <div className="col-12 col-md-4 shadow-lg boxxx text-center m-4">
              <div className="font">
                <div className="rounddd my-3 justify-content-center">
                  <i className="fa-solid fa-phone fs-2 m-3"></i>
                </div>
              </div>
              <h3 style={{ fontFamily: 'courgette' }}>Call Now</h3>
              <h6 className="fs-6">+1 800 123 456 789</h6>
              <h6 className="fs-6">+1 800 123 654 987</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="container pt-3">
          <div className="row text-center mb-4">
            <h1 className="mt-5 courgette-regular fs-8">Have Any Question?</h1>
            <h6 className="fs-6" style={{ color: '#B9B7B7' }}>
              It is a long established fact that a reader will be
            </h6>
            <h6 className="fs-6" style={{ color: '#B9B7B7' }}>
              distracted content of a page when looking.
            </h6>
          </div>
          <div className="row d-flex justify-content-center pt-4">
            <div className="col-12 col-md-4 shadow-lg boxx2">
              <form onSubmit={handleSubmit} id="myForm">
                <div className="row m-2 mt-5">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-3">
                    <input
                      type="text"
                      className="form-control shadow-sm"
                      placeholder="Your Name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <p style={{ color: 'red' }}>{errors.name}</p>
                  </div>
                  <div className="col mt-3">
                    <input
                      type="password"
                      className="form-control shadow-sm"
                      placeholder="Your Password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <p style={{ color: 'red' }}>{errors.password}</p>
                  </div>
                </div>
                <div className="row m-2">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-3">
                    <input
                      type="text"
                      className="form-control shadow-sm"
                      placeholder="Your Email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <p style={{ color: 'red' }}>{errors.email}</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-3">
                    <input
                      type="text"
                      className="form-control shadow-sm"
                      placeholder="Your Phone Number"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <p style={{ color: 'red' }}>{errors.phone}</p>
                  </div>
                </div>
                <div className="row box3 m-2">
                  <div className="col-12">
                    <div className="mb-3 mt-3">
                      <label htmlFor="msg">Message:</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        id="msg"
                        value={formData.msg}
                        onChange={handleChange}
                      ></textarea>
                      <p style={{ color: 'red' }}>{errors.msg}</p>
                    </div>
                  </div>
                  <div className="text-center btn-lg fw-semibold">
                    <button type="submit" className="btn-submit clr">
                      Submit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
