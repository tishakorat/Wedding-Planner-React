import React, { useEffect, useState } from 'react';
import titleImage from '../image/divider_title.webp'

const Hotel = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const hotelData = [
            { path: 1, avatar: "https://i.ibb.co/N3kHmKT/h1.jpg", name: "The Oberoi Palace", price: "$1,80,000.00" },
            { path: 2, avatar: "https://i.ibb.co/D9qdjxL/h2.jpg", name: "Trident Hotel", price: "$90,000.00" },
            { path: 3, avatar: "https://i.ibb.co/rbWPR46/h3.jpg", name: "Crowne Plaza Okhla", price: "$95,000.00" },
            { path: 4, avatar: "https://i.ibb.co/MSvkJRH/h4.jpg", name: "Park Hayat", price: "$80,000.00" },
            { path: 5, avatar: "https://i.ibb.co/gtbCVc4/h5.jpg", name: "Eros Hotel", price: "$75,000.00" },
            { path: 6, avatar: "https://i.ibb.co/6YKqjy9/h6.jpg", name: "The Roseate Palace", price: "$1,50,000.00" },
            { path: 7, avatar: "https://i.ibb.co/7S3dPCx/h7.jpg", name: "Radisson Blu", price: "$1,05,000.00" },
            { path: 8, avatar: "https://i.ibb.co/Y2JFXf1/h8.jpg", name: "Calista Resort", price: "$85,000.00" },
            { path: 9, avatar: "https://i.ibb.co/JKBt2vt/h9.jpg", name: "Fairmont Hotel", price: "$70,000.00" },
            { path: 10, avatar: "https://i.ibb.co/FqKTRBt/h10.jpg", name: "Raffles Villa", price: "$1,30,000.00" },
            { path: 11, avatar: "https://i.ibb.co/RzPL30S/h11.jpg", name: "Royal Orchid", price: "$1,65,000.00" },
            { path: 12, avatar: "https://i.ibb.co/HCpXyq0/h12.jpg", name: "Taj Palace", price: "$1,90,000.00" },
        ];
        setHotels(hotelData);
    }, []);

    return (
        <div>
            <section>
                <div className="container-fluid bg12">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="courgette-regular fs-10 text-white">Hotels</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <div className="text-center">
                                <h2 className="px-5 courgette-regular fs-lg-7 fs-30 pt-3 font1 font-normal">Hotel Planning</h2>
                                <p className="faustina py-2 color">Decoration</p>
                                <img src={titleImage} alt="Divider" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid pb-5">
                    <div className="row text-center justify-content-center">
                        <div className="col-lg-12 mt-5">
                            <div className="d-flex flex-wrap justify-content-center" id="div">
                                {hotels.map((hotel) => (
                                    <div key={hotel.path} className="col-6 col-md-4 col-lg-2 mt-3 wrapper">
                                        <div>
                                            <img src={hotel.avatar} alt={hotel.name} className="img-fluid px-1 px-md-2" />
                                            <h5 className="mt-2 courgette-regular">{hotel.name}</h5>
                                            <h6>{hotel.price}</h6>
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

export default Hotel;
