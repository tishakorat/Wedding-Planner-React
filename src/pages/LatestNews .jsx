import React from 'react';
import im1 from '../image/couple.jpg'
import im2 from '../image/giftN.jpg'
import im3 from '../image/ring.jpg'
import im4 from '../image/4.jpg'
import im5 from '../image/5.jpg'
import im6 from '../image/6.jpg'
import im7 from '../image/7.jpg'
import im8 from '../image/8.jpg'
import im9 from '../image/9.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const LatestNews = () => {
    return (
        <div>
            <section>
                <div className="container-fluid bg14">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="courgette-regular fs-10 text-white">Latest News</h1>
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
                                    {/* 1st img */}
                                    <img src={im1} alt="img" className="img ms-2 me-2 w-75 h-auto" style={{ marginTop: '100px' }} />
                                    <div className="row">
                                        <div className="col-12">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-circle-fill ms-2 r2" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <span className="faustina-text">BY</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" className="bi bi-circle-fill ms-2 r1" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-circle-fill ms-2 r2" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <span className="faustina-text">COMMENTS 35</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" className="bi bi-circle-fill ms-2 r1" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" fill="currentColor" className="bi bi-circle-fill ms-2 r2" viewBox="0 0 16 16">
                                                <circle cx="8" cy="8" r="8" />
                                            </svg>
                                            <span style={{ margin: '0px', padding: '0px', fontSize: '15px' }} className="faustina-text">25 SEP 2023</span>
                                        </div>
                                    </div>

                                    <h3 className="courgette-regular m-3">Perfect Photography of Wedding</h3>
                                    <p style={{ margin: '0px 0px 2px 10px' }} className="faustina-text">
                                        Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.
                                    </p>
                                    <p style={{ margin: '5px 0px 10px 10px' }} className="faustina-text">Read More...</p>

                                    {/* 2nd img */}
                                    <div>
                                        <img src={im2} alt="img" className="img mt-2 ms-2 me-2 w-75 h-auto" />
                                        <div className="row">
                                            <div className="col-12">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-circle-fill ms-2 r2" viewBox="0 0 16 16">
                                                    <circle cx="8" cy="8" r="8" />
                                                </svg>
                                                <span className="faustina-text">BY</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" className="bi bi-circle-fill ms-2 r1" viewBox="0 0 16 16">
                                                    <circle cx="8" cy="8" r="8" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-circle-fill ms-2 r2" viewBox="0 0 16 16">
                                                    <circle cx="8" cy="8" r="8" />
                                                </svg>
                                                <span className="faustina-text">COMMENTS 35</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" className="bi bi-circle-fill ms-2 r1" viewBox="0 0 16 16">
                                                    <circle cx="8" cy="8" r="8" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" fill="currentColor" className="bi bi-circle-fill ms-2 r2" viewBox="0 0 16 16">
                                                    <circle cx="8" cy="8" r="8" />
                                                </svg>
                                                <span style={{ margin: '0px', padding: '0px', fontSize: '15px' }} className="faustina-text">25 SEP 2023</span>
                                            </div>
                                        </div>

                                        <h3 className="courgette-regular m-3">Best Wedding Gift Idea</h3>
                                        <p style={{ margin: '0px 0px 2px 10px' }} className="faustina-text">
                                            Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.
                                        </p>
                                        <p style={{ margin: '5px 0px 10px 10px' }} className="faustina-text">Read More...</p>
                                    </div>

                                    {/* 3rd img */}
                                    <div>
                                        <img src={im3} alt="img" className="img mt-2 ms-2 me-2 w-75 h-auto" />
                                        <div className="row">
                                            <div className="col-12">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-circle-fill text-body-tertiary ms-2" viewBox="0 0 16 16">
                                                    <circle cx="8" cy="8" r="8" />
                                                </svg>
                                                <span className="faustina-text">BY</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" className="bi bi-circle-fill text-body-tertiary ms-2" viewBox="0 0 16 16">
                                                    <circle cx="8" cy="8" r="8" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-circle-fill text-body-tertiary ms-2" viewBox="0 0 16 16">
                                                    <circle cx="8" cy="8" r="8" />
                                                </svg>
                                                <span className="faustina-text">COMMENTS 35</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" className="bi bi-circle-fill text-body-tertiary ms-2" viewBox="0 0 16 16">
                                                    <circle cx="8" cy="8" r="8" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" fill="currentColor" className="bi bi-circle-fill text-body-tertiary ms-2" viewBox="0 0 16 16">
                                                    <circle cx="8" cy="8" r="8" />
                                                </svg>
                                                <span style={{ margin: '0px', padding: '0px', fontSize: '15px' }} className="faustina-text">25 SEP 2023</span>
                                            </div>
                                        </div>

                                        <h3 className="courgette-regular m-3">Unique Wedding Ring Design</h3>
                                        <p style={{ margin: '0px 0px 2px 10px' }} className="faustina-text">
                                            Law is a great career path if you want to build a broad skill set that includes everything from critical thinking and strategic planning to communications. If you love rising to a challenge.
                                        </p>
                                        <p style={{ margin: '5px 0px 10px 10px' }} className="faustina-text">Read More...</p>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4">
                                    <div className="col-md-6 col-lg-10 col-xl-9">
                                        <div className="card">
                                            <img
                                                src="imge/girl.jpg"
                                                alt=""
                                                className="img"
                                                style={{ borderRadius: '100%', width: '160px', margin: 'auto', paddingTop: '20px' }}
                                            />
                                            <h2 style={{ padding: '10px 0px', textAlign: 'center' }} className="courgette-regular">
                                                Jenny Watson
                                            </h2>
                                            <div style={{ padding: '5px 0px 20px', textAlign: 'center' }} className="faustina-text">
                                                Hi! beautiful people. I`m an <br /> author of this blog. Read our <br /> post - stay with us
                                            </div>
                                        </div>
                                    </div>

                                    <form className="d-flex mt-3" role="search">
                                        <input
                                            className="form-control me-2 padding faustina-text w-25"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <button className="btn btn-outline-success faustina-text" type="submit">
                                            Search
                                        </button>
                                    </form>

                                    <h3 className="m-3 courgette-regular">Categories</h3>
                                    <div className="row">
                                        <div className="col-2 col-xl-2 border3"></div>
                                        <div className="col-7 col-xl-7 border2"></div>
                                    </div>

                                    {['Wedding Dress', 'Wedding Registry', 'Perfect Cake', 'Event Planning', 'Photography', 'The Ceremony'].map(
                                        (category, index) => (
                                            <div className="row" key={index}>
                                                <div className="col-7">
                                                    <h5 className="ps-3 pt-4 faustina-text1">{category}</h5>
                                                </div>
                                                <div className="col-5">
                                                    <span className="badge rounded-circle ronud2 mt-4 clr">{index + 1}</span>
                                                </div>
                                            </div>
                                        )
                                    )}

                                    <h3 className="mt-5 mb-4 courgette-regular">Related Posts</h3>
                                    <div className="row">
                                        <div className="col-2 col-xl-2 border3"></div>
                                        <div className="col-7 col-xl-7 border2"></div>
                                    </div>

                                    {[
                                        { img: {im4}, title: 'Perfect Photography of Wedding', date: '25 Sep 2023' },
                                        { img: {im5}, title: 'Best Wedding Gift Idea', date: '23 Sep 2023' },
                                        { img: {im9}, title: 'Top 100 Wedding Ring Design', date: '20 Sep 2023' },
                                    ].map((post, index) => (
                                        <div className="row" key={index}>
                                            <div className="col-4">
                                                <img src={post.img} alt="" className="img1 rounded" style={{ marginTop: '30px', marginLeft: '0px' }} />
                                            </div>
                                            <div className="col-6">
                                                <p className="ptext faustina-text">{post.title}</p>
                                                <p className="ctext faustina-text">{post.date}</p>
                                            </div>
                                        </div>
                                    ))}

                                    <h3 className="mt-5 mb-4 courgette-regular">Projects</h3>
                                    <div className="row">
                                        <div className="col-2 col-xl-2 border3"></div>
                                        <div className="col-7 col-xl-7 border2"></div>
                                    </div>

                                    <div className="row ms-1">
                                        {['10.jpeg', '11.jpeg', '12.jpeg', '13.jpeg', '14.jpeg', '15.jpeg'].map((img, index) => (
                                            <div className="col-4 col-md-4 col-xl-3 col-xxl-3" key={index}>
                                                <img src={`imge/${img}`} alt="" className="img2 rounded img-fluid" style={{ marginTop: index >= 3 ? '10px' : '30px' }} />
                                            </div>
                                        ))}
                                    </div>

                                    <h3 className="mt-5 mb-4 courgette-regular">Tags</h3>
                                    <div className="row">
                                        <div className="col-2 col-xl-2 border3"></div>
                                        <div className="col-7 col-xl-7 border2"></div>
                                    </div>

                                    <div className="d-flex flex-wrap">
                                        {['Photography', 'Planning', 'Wedding', 'Event', 'Creative', 'Solution', 'Collection', 'Idea', 'bride & groom'].map(
                                            (tag, index) => (
                                                <div className="boxx p-2 mt-2 rounded faustina-text" key={index} style={{ margin: '5px' }}>
                                                    {tag}
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LatestNews;

