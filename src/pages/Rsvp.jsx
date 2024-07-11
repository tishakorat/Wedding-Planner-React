import React, { useState } from 'react';
import titleImage from '../image/section-title2.png'
import rsvp from '../image/rsvp1.png'

const Rsvp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    services: '',
    numberOfGuests: '',
    mealPreferences: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    address: '',
    services: '',
    numberOfGuests: '',
    mealPreferences: ''
  });

  const textRegex = /^[a-zA-Z]+$/;
  const numRegex = /^[0-9]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      address: '',
      services: '',
      numberOfGuests: '',
      mealPreferences: ''
    };

    if (formData.name === '') {
      newErrors.name = 'Please enter Name';
      isValid = false;
    } else if (!textRegex.test(formData.name)) {
      newErrors.name = 'Please enter only alphabets';
      isValid = false;
    }

    if (formData.numberOfGuests === '') {
      newErrors.numberOfGuests = 'Please enter Number Of Guests';
      isValid = false;
    } else if (!numRegex.test(formData.numberOfGuests)) {
      newErrors.numberOfGuests = 'Please enter only numbers';
      isValid = false;
    }

    if (formData.email === '') {
      newErrors.email = 'Please enter email';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (formData.mealPreferences === '') {
      newErrors.mealPreferences = 'Please enter Meal Preferences';
      isValid = false;
    } else if (!textRegex.test(formData.mealPreferences)) {
      newErrors.mealPreferences = 'Please enter only letters';
      isValid = false;
    }

    if (formData.address === '') {
      newErrors.address = 'Please enter Address';
      isValid = false;
    }

    if (formData.services === '') {
      newErrors.services = 'Please enter Services';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({
        name: '',
        email: '',
        address: '',
        services: '',
        numberOfGuests: '',
        mealPreferences: ''
      });
    }
  };

  return (
    <section className=" pb-5">
      <div className="container-fluid pt-3 pb-5">
        <div className="row pt-5">
          <div className="col-12 col-md-4 d-flex ">
            <img src={rsvp} alt="Divider" className="img-fluid" />
          </div>
          <div className="col-12 col-md-8">
            <div className="b1 shadow-lg p-2">
              <div className="bin">
                <div className="text-center pt-5">
                  <img src={titleImage} alt="Divider" className="img-fluid" />
                  <h2 className="courgette-regular fs-8 pt-4 pb-5">Will You Attend?</h2>
                </div>
                <form onSubmit={handleSubmit} id="myForm">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mx-5 border border-0 focus-ring focus-ring-light w-75"
                  />
                  <hr className="mx-5" />
                  <p className="px-5" style={{ color: 'red' }}>{errors.name}</p>

                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pt-4 mx-5 border border-0 focus-ring focus-ring-light w-75"
                  />
                  <hr className="mx-5" />
                  <p className="px-5" style={{ color: 'red' }}>{errors.email}</p>

                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="pt-4 mx-5 border border-0 focus-ring focus-ring-light w-75"
                  />
                  <hr className="mx-5" />
                  <p className="px-5" style={{ color: 'red' }}>{errors.address}</p>

                  <input
                    type="text"
                    placeholder="Services"
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    className="pt-4 mx-5 border border-0 focus-ring focus-ring-light w-75"
                  />
                  <hr className="mx-5" />
                  <p className="px-5" style={{ color: 'red' }}>{errors.services}</p>

                  <input
                    type="text"
                    placeholder="Number Of Guests"
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                    className="pt-4 mx-5 border border-0 focus-ring focus-ring-light w-75"
                  />
                  <hr className="mx-5" />
                  <p className="px-5" style={{ color: 'red' }}>{errors.numberOfGuests}</p>

                  <input
                    type="text"
                    placeholder="Meal Preferences"
                    name="mealPreferences"
                    value={formData.mealPreferences}
                    onChange={handleChange}
                    className="pt-4 mx-5 border border-0 focus-ring focus-ring-light w-75"
                  />
                  <hr className="mx-5" />
                  <p className="px-5" style={{ color: 'red' }}>{errors.mealPreferences}</p>

                  <div className="d-flex justify-content-center pt-5">
                    <a id="cubic" href="#">
                      <button title="Send An Inquiry" className="btn clr p-3 px-4 rounded-0 faustina mb-4">Send An Inquiry</button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rsvp;
