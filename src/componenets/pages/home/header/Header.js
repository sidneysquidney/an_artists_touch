import QuoteGenerator from "../../../other/quote-generator/QuoteGenerator";
import Navbar from "../../../other/navbar/Navbar";
import abbey_road from "../../../../assets/abbey_road.jpeg";
import handofgod from "../../../../assets/handofgod.png";
import QuoteBar from "../../../other/quote-generator/QuoteBar";

import { FaStar, FaMusic, FaCheck } from "react-icons/fa";

import "./Header.css";

export default function Header() {
  return (
    <div className="bg-light-blue">
      <Navbar />
      <div className="section-container">
        <div className="header-top">
          <div className="header-top-one">
            <h1>Treat your windows to “An Artists Touch”.</h1>
            <small className="header-small text-grey">
              Get your windows cleaned, and help an artist follow their dreams{" "}
            </small>
          </div>
          <div>
            <img
              src={handofgod}
              alt="Abbey Road Window Cleaners"
              width="auto"
              height="200"
            ></img>
          </div>
        </div>

        <QuoteBar />
        <div className="header-bullets">
          <div>
            <FaStar />
            <p>Professionally trained in the traditional style</p>
          </div>
          <div>
            <FaCheck />
            <p>Fully insured for every occasion</p>
          </div>
          <div>
            <FaMusic />
            <p>Everyone’s a musician</p>
          </div>
        </div>
      </div>
    </div>
  );
}
