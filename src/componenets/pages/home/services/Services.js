import mole_cleaning from "../../../../assets/mole_cleaning.jpg";
import guitar_window from "../../../../assets/guitar_window2.jpg";

import "./Services.css";

export default function Services() {
  return (
    <div className="bg-dark-blue services-container">
      <div className="services-one">
        <h2>Our Services</h2>
        {/* <h3 className="services-subtitle">(An Artist's Touch album)</h3> */}
        <h4 className="services-part-title">Part 1 - The Windows</h4>
        <ol className="services-list">
          <li>Outdoor</li>
          <li>Indoor</li>
          <li>Sills & Frames</li>
          <li>Conservatories</li>
          <li>Gutters</li>
        </ol>
        <h4 className="services-part-title">Part 2 - The Arts</h4>
        <ol className="services-list">
          <li>Concerts</li>
          <li>Music Lessons</li>
        </ol>
      </div>
      <div className="services-two">
        {/* <img
          src={guitar_window}
          alt="Abbey Road Window Cleaners"
          // width="500"
          // height="300"
        ></img> */}
      </div>
    </div>
  );
}
