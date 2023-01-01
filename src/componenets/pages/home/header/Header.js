import QuoteGenerator from "../../../other/quote-generator/QuoteGenerator";
import Navbar from "../../../other/navbar/Navbar";
import abbey_road from "../../../../assets/abbey_road.jpeg";

export default function Header() {
  return (
    <div className="bg-light-blue">
      <Navbar />
      <h1>Treat your windows to “An Artists Touch”.</h1>
      <small className="header-small text-grey">
        Get your windows cleaned, and help an artist follow their dreams{" "}
      </small>
      <img
        src={abbey_road}
        alt="Abbey Road Window Cleaners"
        width="500"
        height="300"
      ></img>
      <QuoteGenerator />
      <ul className="header-bullets">
        <li>Professionally trained in the traditional style</li>
        <li>Fully insured for every occasion</li>
        <li>Everyone’s a musician</li>
      </ul>
    </div>
  );
}
