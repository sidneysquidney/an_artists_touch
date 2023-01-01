import ContactLocation from "../contact-location/ContactLocation";
import Line from "../line/Line";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-music-container"></div>
      <Line />
      <div className="footer-info-container">
        <div className="footer-info1">
          <div className="footer-contact-location-container">
            <h2 className="footer-title">
              Treat your windows to "An Artist's Touch
            </h2>
            <ContactLocation />
          </div>

          <div className="footer-copyright">
            <small className="footer-small">
              Copyright © 2023 An Artist’s Touch. All rights reserved | Terms of
              Service | Privacy Policy
            </small>
          </div>
        </div>
        <div className="footer-info2">
          <h3 className="footer-subtitle">The Windows</h3>
          <ul className="footer-list">
            <li>Make A Booking</li>
            <li>Get A Quote</li>
            <li>Become A Window Cleaner</li>
          </ul>
        </div>
        <div className="footer-info3">
          <h3 className="footer-subtitle">The Arts</h3>
          <ul className="footer-list">
            <li>Book A Concert</li>
            <li>Learn An Instrument</li>
            <li>Greatest Hits</li>
          </ul>
        </div>
        <div className="footer-info4">
          <h3 className="footer-subtitle">Connect</h3>
          <ul className="footer-list">
            <li>Phone</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
