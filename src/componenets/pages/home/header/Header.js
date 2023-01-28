import QuoteGenerator from "../../../other/quote-generator/QuoteGenerator";
import Navbar from "../../../other/navbar/Navbar";
import QuoteBar from "../../../other/quote-generator/QuoteBar";

import { FaStar, FaMusic, FaCheck } from "react-icons/fa";

import "./Header.css";
// import handofgod from "../../../../assets/handofgod.png";
const handofgod =
  "https://lh3.googleusercontent.com/gaOVxXy7uUF5tEHTNbZ4CYsKMUM_dWD2zjsYffLGceeLqY8WligA8nMzvCzrzIIzmAtyVhiZSO3MOC6dEB-aOB9dWKHhhFWQTBp5q9NZecYlWfZHgMoklgmWcL73a2hIuYoo1vyl8GEJ1rRsyfMQN7b9SzrOmwydo9WvPpIRyzp3QCiBDFQzkIuyPVjVeLaqRkRaRIh-sinG8VL6ga4D_DfRpq9tl2auqZocmamS4abFPNdxZ4ND2qKDuvu1J2erBtFICFyHAo_JkaZIVrpaa6XUGFPh-QvYovuv_P6amT6sgCp0laPfTJq7PYRJZnymqyp2WdBoHsw-4NCUmz5SvQ63dAm2g6a37Ej4vjjDU11px9faGldJKDZbPEYJn28f-J4mUVigDX8SR_TO4rcDLFsuyYneJmHgCbEwyOkihPM5CNTfJhnENU4xaibiyGUQ7X5Tjl9Yl4JsubE_3R23KUz38e1TFY_xbH2UMwIKRkNrRf-V_eJjsdMVG_A_Lm9FTgnZt0Be3Mw6p5aHWfq3FvNTINLEh1yHd59i21pmx-xL1QchDwTE_bMJQR0zwgCx2ubRl8pHkx1HR4MO4FPVuF04cUdCHOxW8jl7kdOZbqACYZ5Iq1BWobrLCICc_zd_OD0TsjwaEsttzOI6mB7v4F2f9axN1MgpdpkBHwgerlHf4gaMA80SRquYSkVXKU-oe7xQ6Rr1iM1-TttTbqC6ztdY-TS6oR75iT4QZOUBHj5uMEiUNZ_JzQ7WGWLyKl-LaJuWDMxdMWFMsp_A77qcg5jxtXGqd_bW92sUE82WgWspjOjUocVkaONofp1g6fwQ9VdUbajPH7yOhIS0uXMiO1yUX1iw0AX0IfQBlyS9IS9xk3BswofToPKH08eG6vvcGYcyIIPHYMj_UHXBIvoWLyFg0i7IEgJLa-HLEmSC2v2k05Ly=w1134-h572-no?authuser=0";

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
