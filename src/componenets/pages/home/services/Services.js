import mole_cleaning from "../../../../assets/mole_cleaning.jpg";

export default function Services() {
  return (
    <div className="bg-dark-blue">
      <div className="">
        <h2>Our Services</h2>
        <h3 className="services-subtitle">(An Artist's Touch album)</h3>
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
      <div className="services-image-container">
        <img
          src={mole_cleaning}
          alt="Abbey Road Window Cleaners"
          // width="500"
          // height="300"
        ></img>
      </div>
    </div>
  );
}
