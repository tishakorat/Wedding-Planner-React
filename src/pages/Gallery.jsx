import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        const gallerys = {
            gallery: [
                { path: 1, avatar: "https://i.ibb.co/Y3J8DHq/01.jpg" },
                { path: 2, avatar: "https://i.ibb.co/2WPX1GT/02.jpg" },
                { path: 3, avatar: "https://i.ibb.co/Cz7L76r/03.jpg" },
                { path: 4, avatar: "https://i.ibb.co/WG0BQqJ/04.jpg" },
                { path: 5, avatar: "https://i.ibb.co/jTmB6zt/05.jpg" },
                { path: 6, avatar: "https://i.ibb.co/Fm0fwWX/06.jpg" },
                { path: 7, avatar: "https://i.ibb.co/YkrThHv/07.jpg" },
                { path: 8, avatar: "https://i.ibb.co/LPqGgps/08.jpg" },
            ]
        };
        setGallery(gallerys.gallery);
    }, []);

    return (
        <>
        <div className="container-fluid bggallery">
            <div className="row">
                <div className="col-12">
                    <div className='position-relative'>
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <p className="font">Gallery</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <section>
                <div className="container-fluid pb-5">
                    <div className="row text-center justify-content-center">
                        <div className="col-lg-12 mt-5">
                            <div className="d-flex flex-wrap justify-content-center">
                                {gallery.map((gal) => (
                                    <div key={gal.path} className="col-lg-3 col-sm-6 col-12 mt-4">
                                        <div>
                                            <img src={gal.avatar} alt="" className="img-fluid img px-1" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       
        </>
    );
};

export default Gallery;
