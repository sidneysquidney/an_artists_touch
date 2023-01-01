import Navbar from "../../other/navbar/Navbar";
import { Link } from "react-router-dom";

export default function ContactHeader() {
  return (
    <div className="contact-header-container bg-light-blue">
      <Navbar />
      <div className="contact-header">
        <h1>Got a question or want to make a booking? Get in touch.</h1>
        <h2>Phone</h2>
        <ul>
          <li>
            <a href="tel:01761435656" className="dark-blue-hover">
              01761 435656
            </a>
          </li>
          <li>
            <a href="tel:07847586453" className="dark-blue-hover">
              07847 586453
            </a>
          </li>
        </ul>
        <h2>Email</h2>
        <ul>
          <li>
            <a
              href="mailto:artiststouchwindows@gmail.com"
              className="dark-blue-hover"
            >
              artiststouchwindows@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
