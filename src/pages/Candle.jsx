import React, { useEffect, useState } from 'react';
import titleImage from '../image/divider_title.webp'

const Candle = () => {
    const [candles, setCandles] = useState([]);

    useEffect(() => {
        const candleData = [
            { path: 1, avatar: "https://i.ibb.co/qnnFsTR/m1.jpg", name: "Beach Candles", price: "$70.00" },
            { path: 2, avatar: "https://i.ibb.co/7nsqNSS/m2.jpg", name: "Dinner Candles", price: "$50.00" },
            { path: 3, avatar: "https://i.ibb.co/dcyQZ0v/m3.jpg", name: "Cave Candles", price: "$80.00" },
            { path: 4, avatar: "https://i.ibb.co/X5Wp6Ct/m4.jpg", name: "Entry Candles", price: "$90.00" },
            { path: 5, avatar: "https://i.ibb.co/m089QWw/m5.jpg", name: "Jar Candles", price: "$70.00" },
            { path: 6, avatar: "https://i.ibb.co/WVMTfkC/m6.jpg", name: "Light With Candles", price: "$110.00" },
            { path: 7, avatar: "https://i.ibb.co/Qnp7cn2/m7.jpg", name: "Decoration Candles", price: "$60.00" },
            { path: 8, avatar: "https://i.ibb.co/85zQVYB/m8.jpg", name: "Candle Light Dinner", price: "$45.00" },
            { path: 9, avatar: "https://i.ibb.co/KVbjFqK/m9.jpg", name: "Party Candles", price: "$55.00" },
            { path: 10, avatar: "https://i.ibb.co/1nBtSYp/m10.jpg", name: "Glass Candles", price: "$65.00" },
            { path: 11, avatar: "https://i.ibb.co/xjVrcp2/m11.jpg", name: "Flower With Candles", price: "$92.00" },
            { path: 12, avatar: "https://i.ibb.co/j5LnjSR/m12.jpg", name: "Long Candles", price: "$30.00" },
        ];
        setCandles(candleData);
    }, []);

    return (
        <div>
            <section>
                <div className="container-fluid bg9">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="courgette-regular fs-10 text-white">Candles</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid pt-5">
                    <div className="row pt-2">
                        <div className="col-12 ">
                            <div className="text-center">
                                <h2 className="px-5 courgette-regular fs-lg-7 fs-30  font1 font-normal">Wedding Planning</h2>
                                <p className="faustina py-2 color">Decoration</p>
                                <img src={titleImage} alt="Divider" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid pb-5">
                    <div className="row text-center justify-content-center pb-3">
                        <div className="col-lg-12 mt-5">
                            <div className="d-flex flex-wrap justify-content-center" id="div">
                                {candles.map((can) => (
                                    <div key={can.path} className="col-6 col-md-4 col-lg-2 mt-3 wrapper">
                                        <div>
                                            <img src={can.avatar} alt={can.name} className="img-fluid px-1 px-md-2" />
                                            <h5 className="mt-2 courgette-regular">{can.name}</h5>
                                            <h6>{can.price}</h6>
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

export default Candle;
