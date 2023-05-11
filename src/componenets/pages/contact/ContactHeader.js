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
            <p>London: </p>
            <a href="tel:01761435656" className="dark-blue-hover">
              07903 650710
            </a>
          </li>
          <li>
            <p>Bath: </p>
            <a href="tel:07847586450" className="dark-blue-hover">
              07847 586450
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
