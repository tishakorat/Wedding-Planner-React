import React from 'react';
import im1 from '../image/1o.jpg'
import im2 from '../image/2o.jpg'
import im3 from '../image/3o.jpg'
import im4 from '../image/4o.jpg'


const Ourplaner = () => {
    const planner = {
        "planners": [
            {
                "name": "Bella Maria",
                "role": "Product Designer",
                "image": "https://i.ibb.co/S5yYTxw/1o.jpg"
            },
            {
                "name": "Esther Howard",
                "role": "Product Designer",
                "image": "/images/2o.jpg"
            },
            {
                "name": "Marry Rose",
                "role": "Product Designer",
                "image": "/images/3o.jpg"
            },
            {
                "name": "Bella Maria",
                "role": "Product Designer",
                "image": "/images/4o.jpg"
            }
        ]
    }
    return (
        <>
            <div className="container-fluid bg16 mb-4">
                <div className="row">
                    <div className="col-12">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <p className="font">Our Planner</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-5 d-none d-md-block pt-5">
                <div className="row ">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="row">
                            <div className="col-12 rounded-shape">
                                <div className="wapper1 rounded-shape">
                                    <img src={im1} alt="" className="img-fluid rounded-circle" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-center flex-column mb-3 pb-3 mt-3 pt-3">
                                    <div className="courgette-regular">
                                        <h3>Bella Maria</h3>
                                    </div>
                                    <label className="faustina-text fs-6">Product Designer</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="row">
                            <div className="col-12 m-center">
                                <div className="d-flex align-items-center flex-column mt-3 pt-3 mb-3 pb-3">
                                    <div className="courgette-regular">
                                        <h3>Esther Howard</h3>
                                    </div>
                                    <label className="faustina-text fs-6">Product Designer</label>
                                </div>
                            </div>
                            <div className="col-12 rounded-shape">
                                <div className="wapper1 rounded-shape">
                                    <img src={im2} alt="" className="img-fluid rounded-circle" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="row">
                            <div className="col-12 rounded-shape">
                                <div className="wapper1 rounded-shape">
                                    <img src={im3} alt="" className="img-fluid rounded-circle" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-center flex-column mb-3 pb-3 mt-3 pt-3">
                                    <div className="courgette-regular">
                                        <h3>Marry Rose</h3>
                                    </div>
                                    <label className="faustina-text fs-6">Product Designer</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="row">
                            <div className="col-12 m-center">
                                <div className="d-flex align-items-center flex-column mt-3 pt-3 mb-3 pb-3">
                                    <div className="courgette-regular">
                                        <h3>Bella Maria</h3>
                                    </div>
                                    <label className="faustina-text fs-6">Product Designer</label>
                                </div>
                            </div>
                            <div className="col-12 rounded-shape">
                                <div className="wapper1 rounded-shape">
                                    <img src={im4} alt="" className="img-fluid rounded-circle" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid   d-block d-md-none ">
                <div className="row ">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="col-12">
                                    <div className="wapper1">
                                        <img src={im1} alt="" className="img-fluid rounded-circle" />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-column mb-3 pb-3 mt-3 pt-3">
                                    <div className="courgette-regular">
                                        <h3>Bella Maria</h3>
                                    </div>
                                    <label className="faustina-text fs-6">Product Designer</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="col-12">
                                    <div className="wapper1 rounded-shape">
                                        <img src={im2} alt="" className="img-fluid rounded-circle" />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-column mt-3 pt-3 mb-3 pb-3">
                                    <div className="Font">
                                        <h3>Esther Howard</h3>
                                    </div>
                                    <label className="middle-font">Product Designer</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="wapper1 rounded-shape">
                                    <img src={im3} alt="" className="img-fluid rounded-circle" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-center flex-column mb-3 pb-3 mt-3 pt-3">
                                    <div className="Font">
                                        <h3>Marry Rose</h3>
                                    </div>
                                    <label className="middle-font">Product Designer</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="wapper1 rounded-shape">
                                    <img src={im4} alt="" className="img-fluid rounded-circle" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-center flex-column mt-3 pt-3 mb-3 pb-3">
                                    <div className="Font">
                                        <h3>Bella Maria</h3>
                                    </div>
                                    <label className="middle-font">Product Designer</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ourplaner;
