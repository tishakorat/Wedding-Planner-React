import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import im1 from '../image/1.1.jpg'
import im2 from '../image/2.jpg'
import im3 from '../image//3.jpg'
import im4 from '../image/4.jpg'
import im5 from '../image/5.jpg'
import im6 from '../image/6.jpg'
import im7 from '../image/7.jpg'
import im8 from '../image/8.jpg'
import im9 from '../image/9.jpg'

const WeddingRegistry = () => {
    return (
        <>
            <section>
                <div className="container-fluid bg13">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="courgette-regular fs-10 text-white">Wedding Registry</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-xl-8 col-lg-8">
                                    <img src={im1} alt="" className="img img-fluid w-100" style={{ marginTop: '80px' }} />
                                    <div>
                                        <h2 className="mt-3 courgette-regular">Project Requirement</h2>
                                        <p className="mt-2 faustina-text">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                            alteration in some form, by injected humour, or randomised words which don't look even
                                            slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                                            isn't anything embarrassing hidden in the middle.
                                        </p>
                                        <p className="faustina-text">
                                            The majority have suffered alteration in some form or randomised words which don't look even
                                            slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                                            isn't anything embarrassing hidden.
                                        </p>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-4 col-xxl-4">
                                            <img src={im2} alt="" className="img mt-3 me-2 mb-2 ms-2 w-75 img-fluid h-75" />
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-4 col-xxl-4">
                                            <img src={im3} alt="" className="img mt-3 me-2 mb-2 ms-2 w-75 img-fluid h-75" />
                                        </div>
                                    </div>

                                    <div className="container-fluid pt-4">
                                        <h2 className="m-2 courgette-regular">Our work process</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-3 col-xxl-4">
                                            <div className="border mt-3 mb-2 w-75" style={{ borderColor: '#4A6360' }}>
                                                <h5 className="ms-3 mt-3 mb-3" style={{ color: '#4A6360' }}>Research and <br /> analytics</h5>
                                                <p className="p-3 faustina-text">
                                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-3 col-xxl-4">
                                            <div className="border mt-3 mb-2 w-75" style={{ borderColor: '#4A6360' }}>
                                                <h5 className="ms-3 mt-3 mb-3" style={{ color: '#4A6360' }}>Design and Idea</h5>
                                                <p className="p-3 faustina-text">
                                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-3 col-xxl-4">
                                            <div className="border mt-3 mb-2 w-75" style={{ borderColor: '#4A6360' }}>
                                                <h5 className="ms-3 mt-3 mb-3" style={{ color: '#4A6360' }}>All Event Manage</h5>
                                                <p className="p-3 faustina-text">
                                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row pt-5 pb-5">
                                        <div className="col-12 col-lg-9 col-xxl-4 card-w w-75">
                                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapseOne"
                                                            aria-expanded="false"
                                                            aria-controls="flush-collapseOne"
                                                        >
                                                            <div className="faustina-text">We Can Save More Lives With Your Helping Hand</div>
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id="flush-collapseOne"
                                                        className="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFlushExample"
                                                    >
                                                        <div className="accordion-body faustina-text">
                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure
                                                            nemo esse repellendus est quo recusandae. Delectus, maxime.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapseTwo"
                                                            aria-expanded="false"
                                                            aria-controls="flush-collapseTwo"
                                                        >
                                                            <div className="faustina-text">Planning can help alleviate workplace stress and increase productivity</div>
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id="flush-collapseTwo"
                                                        className="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFlushExample"
                                                    >
                                                        <div className="accordion-body faustina-text">
                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure
                                                            nemo esse repellendus est quo recusandae. Delectus, maxime.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapseThree"
                                                            aria-expanded="false"
                                                            aria-controls="flush-collapseThree"
                                                        >
                                                            <div className="faustina-text">Those who experiment the most, are able to innovate the best.</div>
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id="flush-collapseThree"
                                                        className="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFlushExample"
                                                    >
                                                        <div className="accordion-body faustina-text">
                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure
                                                            nemo esse repellendus est quo recusandae. Delectus, maxime.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapsefour"
                                                            aria-expanded="false"
                                                            aria-controls="flush-collapsefour"
                                                        >
                                                            <div className="faustina-text">Understand Your Problem, You must understand the issue.</div>
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id="flush-collapsefour"
                                                        className="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFlushExample"
                                                    >
                                                        <div className="accordion-body faustina-text">
                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure
                                                            nemo esse repellendus est quo recusandae. Delectus, maxime.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-xxl-4 pb-5">
                                    <form className="d-flex" role="search" style={{ marginTop: '100px' }}>
                                        <input className="form-control me-2 padding faustina-text w-50" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success faustina-text" type="submit">Search</button>
                                    </form>
                                    <h3 className="m-3 courgette-regular">Services</h3>
                                    <div className="row">
                                        <div className="col-2 col-xl-2 border3"></div>
                                        <div className="col-7 col-xl-7 border2"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-7">
                                            <h5 className="ps-3 pt-4 faustina-text1">Wedding Dress</h5>
                                        </div>
                                        <div className="col-5">
                                            <span className="badge rounded-circle ronud mt-4 clr">1</span>
                                        </div>
                                        <div className="col-7">
                                            <h5 className="ps-3 pt-4 faustina-text1">Wedding Registry</h5>
                                        </div>
                                        <div className="col-5">
                                            <span className="badge rounded-circle ronud mt-4 clr">2</span>
                                        </div>
                                        <div className="col-7">
                                            <h5 className="ps-3 pt-4 faustina-text1">Perfect Cake</h5>
                                        </div>
                                        <div className="col-5">
                                            <span className="badge rounded-circle ronud mt-4 clr">3</span>
                                        </div>
                                        <div className="col-7">
                                            <h5 className="ps-3 pt-4 faustina-text1">Event Planning</h5>
                                        </div>
                                        <div className="col-5">
                                            <span className="badge rounded-circle ronud mt-4 clr">4</span>
                                        </div>
                                        <div className="col-7">
                                            <h5 className="ps-3 pt-4 faustina-text1">Photography</h5>
                                        </div>
                                        <div className="col-5">
                                            <span className="badge rounded-circle ronud mt-4 clr">5</span>
                                        </div>
                                        <div className="col-7">
                                            <h5 className="ps-3 pt-4 faustina-text1">The Ceremony</h5>
                                        </div>
                                        <div className="col-5">
                                            <span className="badge rounded-circle ronud mt-4 clr">6</span>
                                        </div>
                                    </div>

                                    <h3 className="mt-5 mb-3 ms-3 courgette-regular">Instagram</h3>
                                    <div className="row">
                                        <div className="col-2 col-xl-2 border3"></div>
                                        <div className="col-7 col-xl-7 border2"></div>
                                    </div>
                                    <div className="row ms-1">
                                        <div className="col-4 col-md-4 col-xl-3 col-xxl-3">
                                            <img src={im4} alt="" className="img1 rounded img-fluid" style={{ marginTop: '30px' }} />
                                        </div>
                                        <div className="col-4 col-md-4 col-xl-3 col-xxl-3">
                                            <img src={im5} alt="" className="img1 rounded img-fluid" style={{ marginTop: '30px' }} />
                                        </div>
                                        <div className="col-4 col-md-4 col-xl-3 col-xxl-3">
                                            <img src={im6} alt="" className="img1 rounded img-fluid" style={{ margin: '30px 10px 0px 0px' }} />
                                        </div>
                                    </div>
                                    <div className="row ms-1">
                                        <div className="col-4 col-md-4 col-xl-3 col-xxl-3">
                                            <img src={im7} alt="" className="img1 rounded img-fluid" style={{ marginTop: '10px' }} />
                                        </div>
                                        <div className="col-4 col-md-4 col-xl-3 col-xxl-3">
                                            <img src={im8} alt="" className="img1 rounded img-fluid" style={{ marginTop: '10px' }} />
                                        </div>
                                        <div className="col-4 col-md-4 col-xl-3 col-xxl-3">
                                            <img src={im9} alt="" className="img1 rounded img-fluid" style={{ margin: '10px 10px 0px 0px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WeddingRegistry;
