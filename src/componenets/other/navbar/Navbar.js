import { Link } from "react-router-dom";
import ContactLocation from "../contact-location/ContactLocation";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <h1 className="logo-title">AN ARTIST'S TOUCH</h1>
        <h2 className="logo-subtitle ">Window Cleaning</h2>
      </div>
      <div className="nav-container">
        <ContactLocation />
        <div className="nav-links">
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
          </ul>
          <Link to={"/quote"}>
            <button type="button" className="nav-button nav-link">
              Get A Quote
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
// asdf
