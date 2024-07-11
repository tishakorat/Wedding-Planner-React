import React, { useEffect, useState } from 'react';

const  Accommodation = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2024-12-31T23:59:59'); 

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="pb-5">
        <div className="container-fluid bg">
          <div className="row">
            <div className="col-12">
              <h1 className="courgette-regular fs-10 text-white v">Announcement</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container pb-5">
        <div className="row d-flex justify-content-center" id="clockdiv">
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
            <div className="acc m gy-sm-2">
              <span className="font" style={{ color: '#cde0ef' }}>{timeLeft.days}</span>
              <h4>Days</h4>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
            <div className="acc m gy-sm-2">
              <span className="font" style={{ color: '#cde0ef' }}>{timeLeft.hours}</span>
              <h4>Hours</h4>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
            <div className="acc m gy-sm-2">
              <span className="font" style={{ color: '#cde0ef' }}>{timeLeft.minutes}</span>
              <h4>Minutes</h4>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
            <div className="acc m gy-sm-2">
              <span className="font" style={{ color: '#cde0ef' }}>{timeLeft.seconds}</span>
              <h4>Seconds</h4>
            </div>
          </div>
        </div>
        <p id="demo"></p>
      </div>
    </>
  );
};

export default Accommodation;

