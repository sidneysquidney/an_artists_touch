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
      <div className="services-two"></div>
    </div>
  );
}
