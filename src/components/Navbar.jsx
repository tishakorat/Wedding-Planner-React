// import React from 'react';
// import { Container, Row } from 'react-bootstrap';
// import imglogo from '../image/logo.png';

// function Navbar() {
//   return (
//     <Container fluid>
//       <Row>
//         <nav className="navbar fixed-top sticky-top navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret sticky-lg-top">
//           <div className="container-fluid">
//             <a className="navbar-brand mx-0" href="index.html">
//               <img src={imglogo} alt="BootstrapBrain Logo" width="150" height="60" />
//             </a>
//             <button
//               className="navbar-toggler border-0"
//               type="button"
//               data-bs-toggle="offcanvas"
//               data-bs-target="#offcanvasNavbar"
//               aria-controls="offcanvasNavbar"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="currentColor"
//                 className="bi bi-list"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
//                 />
//               </svg>
//             </button>
//             <div
//               className="offcanvas offcanvas-end"
//               tabIndex="-1"
//               id="offcanvasNavbar"
//               aria-labelledby="offcanvasNavbarLabel"
//             >
//               <div className="offcanvas-header">
//                 <h5 className="offcanvas-title courgette-regular" id="offcanvasNavbarLabel">Menu</h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//               </div>
//               <div className="offcanvas-body d p2">
//                 <ul className="navbar-nav justify-content-center flex-grow-1 topnav pt-3 pt-lg-0">
//                   {renderDropdown("Home", [
//                     { href: "./index.html", label: "Main Home" },
//                     { href: "./accomodation.html", label: "Accommodation" },
//                     { href: "./invitation.html", label: "Invitation" },
//                     { href: "./rsvp.html", label: "RSVP" }
//                   ])}
//                   {renderDropdown("Pages", [
//                     { href: "./about.html", label: "About" },
//                     { href: "./gallary.html", label: "Gallery" },
//                     { href: "./candles.html", label: "Candles" },
//                     { href: "./hotels.html", label: "Hotels" },
//                     { href: "./food.html", label: "Food" },
//                     { href: "./bookey.html", label: "Bouquets" },
//                     { href: "./decoration.html", label: "Decoration" }
//                   ])}
//                   {renderDropdown("Shop", [
//                     { href: "./Shopwedding.html", label: "Shop" },
//                     { href: "./Cartwedding.html", label: "Cart" },
//                     { href: "./Checkout.html", label: "Checkout" }
//                   ])}
//                   {renderDropdown("Service", [
//                     { href: "./service.html", label: "Service" },
//                     { href: "./Wedding Registry.html", label: "Wedding registry" }
//                   ])}
//                   {renderDropdown("Blog", [
//                     { href: "./Leatestnews.html", label: "Latest news" },
//                     { href: "./portfolio.html", label: "Portfolio" }
//                   ])}
//                   {renderDropdown("Team", [
//                     { href: "./OurPlannerwedding.html", label: "Our Planners" },
//                     { href: "./WeddingGroomsmen.html", label: "Groomsmen" },
//                     { href: "./WeddingBridesmaids.html", label: "Bridesmaids" }
//                   ])}
//                   {renderDropdown("Contact", [
//                     { href: "./contact.html", label: "Contact us" }
//                   ])}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </Row>
//     </Container>
//   );
// }

// const renderDropdown = (title, items) => {
//   return (
//     <li className="nav-item dropdown">
//       <a
//         className="nav-link dropdown-hover mx-3 fw-bold courgette-regular fs-5"
//         href="#!"
//         id={`${title}Dropdown`}
//         role="button"
//         data-bs-toggle="dropdown"
//         aria-expanded="false"
//       >
//         {title}
//       </a>
//       <ul className="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby={`${title}Dropdown`}>
//         {items.map((item, index) => (
//           <li key={index}>
//             <a className="dropdown-item fs-6 faustina-text" href={item.href}>{item.label}</a>
//           </li>
//         ))}
//       </ul>
//     </li>
//   );
// };

// export default Navbar;

import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imglogo from '../image/logo.png';

const Navbar = () => {
  return (
    <Container fluid>
      <Row>
        <nav className="navbar fixed-top sticky-top navbar-expand-lg bsb-navbar bsb-navbar-hover bsb-navbar-caret sticky-lg-top">
          <div className="container-fluid">
            <Link className="navbar-brand mx-0" to="/">
              <img src={imglogo} alt="BootstrapBrain Logo" width="150" height="60" />
            </Link>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title courgette-regular" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body d p2">
                <ul className="navbar-nav justify-content-center flex-grow-1 topnav pt-3 pt-lg-0">
                  {renderDropdown("Home", [
                    { to: "/", label: "Main Home" },
                    { to: "/accommodation", label: "Accommodation" },
                    { to: "/invitation", label: "Invitation" },
                    { to: "/rsvp", label: "RSVP" }
                  ])}
                  {renderDropdown("Pages", [
                    { to: "/about", label: "About" },
                    { to: "/gallery", label: "Gallery" },
                    { to: "/candles", label: "Candles" },
                    { to: "/hotels", label: "Hotels" },
                    { to: "/food", label: "Food" },
                    { to: "/bouquets", label: "Bouquets" },
                    { to: "/decoration", label: "Decoration" }
                  ])}
                  {renderDropdown("Shop", [
                    { to: "/shop", label: "Shop" },
                    { to: "/cart", label: "Cart" },
                    { to: "/checkout", label: "Checkout" }
                  ])}
                  {renderDropdown("Service", [
                    { to: "/service", label: "Service" },
                    { to: "/wedding-registry", label: "Wedding registry" }
                  ])}
                  {renderDropdown("Blog", [
                    { to: "/latest-news", label: "Latest news" },
                    { to: "/portfolio", label: "Portfolio" }
                  ])}
                  {renderDropdown("Team", [
                    { to: "/our-planners", label: "Our Planners" },
                    { to: "/groomsmen", label: "Groomsmen" },
                    { to: "/bridesmaids", label: "Bridesmaids" }
                  ])}
                  {renderDropdown("Contact", [
                    { to: "/contact", label: "Contact us" }
                  ])}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </Row>
    </Container>
  );
};

const renderDropdown = (title, items) => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-hover mx-3  fw-bold courgette-regular fs-5"
        href="#!"
        id={`${title}Dropdown`}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </a>
      <ul className="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby={`${title}Dropdown`}>
        {items.map((item, index) => (
          <li key={index}>
            <Link className="dropdown-item fs-6 faustina-text" to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Navbar;





