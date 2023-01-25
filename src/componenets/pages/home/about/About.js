import Button from "../../../other/button/Button";
import windows_picture from "../../../../assets/windowssquare.png";

import "./About.css";
export default function About() {
  return (
    <div className="section-container">
      <div className="about-section">
        <div className="about-one">
          <h2>Who are we?</h2>
          <h3 className="alternate-section-title">Artists & Window Cleaners</h3>
          <img src={windows_picture} className="about-image" />
        </div>
        <div className="about-two">
          <h4>Our Mission</h4>
          <p>
            Every employee at An Artist's Touch is a musician. Our goal is clear
            and simple, help artists to follow their dreams. We do this by
            providing them with a financial foundation, giving them the time and
            space to hone their craft, while we use our platform to share it
            with the world!
          </p>
          <h4>But will we get the job done to standard?</h4>
          <p>
            Our employees our trained professionals who clean using the
            traditional method, allowing us to leave your windows sparkling. An
            artist is someone with heightened attention to detail, someone who
            takes pride in their work and executes it with flawless technical
            proficiency.
          </p>
          <h4>New kids on the block</h4>
          <p>
            When you get your windows cleaned with ‘An Artists Touch’ you join
            the family. With your support we can discover artists with world
            class potential and put them under the spotlight!
          </p>
          <div className="about-button-container">
            <Button value="Book an Artist" page="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
