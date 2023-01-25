import { Link } from "react-router-dom";
import ContactLocation from "../contact-location/ContactLocation";
import { useRef } from "react";

import { FaTimes, FaBars } from "react-icons/fa";

import "./Navbar.css";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <div className="navbar-container">
      <div className="space-between-one">
        <div className="logo-container">
          <h1 className="logo-title">AN ARTIST'S TOUCH</h1>
          <h2 className="logo-subtitle ">Window Cleaning</h2>
        </div>
        <div className="navbar-contact-location">
          <ContactLocation />
        </div>
      </div>
      <div className="space-between-two">
        <nav ref={navRef}>
          <ul>
            <li>
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/musicians" className="nav-link">
                Musicians
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/quote" className="nav-link navbar-quote">
                Get A Quote
              </Link>
            </li>
          </ul>
          {/* <button className="navbar-quote-button">get a quote</button> */}
          <Link to={"/quote"}>
            <button
              type="button"
              className="nav-button nav-link navbar-quote-button"
            >
              Get A Quote
            </button>
          </Link>

          <button
            onClick={showNavbar}
            className="nav-toggle-button nav-close-button"
          >
            <FaTimes />
          </button>
        </nav>
        <button className="nav-toggle-button" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </div>

    // <nav>
    //   <div className="logo-container">
    //     <h1 className="logo-title">AN ARTIST'S TOUCH</h1>
    //     <h2 className="logo-subtitle ">Window Cleaning</h2>
    //   </div>
    //   <div className="nav-container">
    //     <ContactLocation />
    //     <div className="nav-links">
    //       <ul>
    //         <li>
    //           <Link to="/home" className="nav-link">
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/musicians" className="nav-link">
    //             Musicians
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/contact" className="nav-link">
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>
    //       <Link to={"/quote"}>
    //         <button type="button" className="nav-button nav-link">
    //           Get A Quote
    //         </button>
    //       </Link>
    //       <button
    //         className="nav-toggle-button nav-close-btn"
    //         // onClick={showNavbar}
    //       >
    //         <FaTimes />
    //       </button>
    //     </div>
    //     <button
    //       className="nav-toggle-button"
    //       // onClick={showNavbar}
    //     >
    //       <FaBars />
    //     </button>
    //   </div>
    // </nav>
  );
}
// asdf
