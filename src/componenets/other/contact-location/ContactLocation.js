import "./ContactLocation.css";

export default function ContactLocation() {
  return (
    <div className="contact-location">
      <small>
        <a href="tel:07847586453" className="text-turquoise text-italic">
          07903 650715
        </a>
      </small>
      <small className="text-grey contact-location-divider">|</small>
      <small className="text-grey text-italic">Bath & South East London</small>
    </div>
  );
}
