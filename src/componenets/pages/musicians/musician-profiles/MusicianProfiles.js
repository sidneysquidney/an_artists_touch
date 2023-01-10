import Profile from "./Profile";

import "./MusicianProfiles.css";

import siddhartha from "./Siddhartha.js";
import harold from "./Harold.js";
import insolace from "./Insolace.js";

import { useState } from "react";
import { useEffect } from "react";

function MusicianProfiles() {
  const [index, setIndex] = useState(0);

  const musicians = [siddhartha, harold, insolace];

  const updateSliderDots = (index, previousIndex) => {
    const indexId = "musician-profiles-slide-dot-" + index;
    const previousIndexId = "musician-profiles-slide-dot-" + previousIndex;
    let dot = document.getElementById(indexId);
    let previousDot = document.getElementById(previousIndexId);
    dot.style.color = "var(--aqua-blue)";
    previousDot.style.color = "white";
    return dot;
  };

  const buttonClick = (n) => {
    const slide = document.getElementById("musician-profiles-slide");
    let i = index;
    i += n;
    if (i >= 0 && i < musicians.length) {
      updateSliderDots(i, index);
      setIndex(i);
      slide.style.transform = "translateX(-" + i * 800 + "px)";
    }
  };

  useEffect(() => {
    let startDot = document.getElementById("musician-profiles-slide-dot-0");
    startDot.style.color = "var(--aqua-blue)";
    let slideRow = document.getElementsByClassName(
      "musician-profiles-slide-row"
    )[0];
    slideRow.style.width = 800 * musicians.length + "px";
  }, []);

  return (
    <div className="musician-profiles-container-full bg-dark-blue">
      <Slider musicians={musicians} buttonClick={buttonClick} />
      <SliderDots musician_profilesCount={musicians.length} />
    </div>
  );
}

function SliderDots(props) {
  return (
    <div className="slide-dots">
      {[...Array(props.musician_profilesCount).keys()].map((index) => {
        return (
          <p id={"musician-profiles-slide-dot-" + index} key={index}>
            ●
          </p>
        );
      })}
    </div>
  );
}

function Slider(props) {
  const buttonClick = (n) => {
    props.buttonClick(n);
  };

  return (
    <div className="slide-buttons-container">
      <LeftArrow buttonClick={buttonClick} />
      <div className="slide-container">
        <div className="slide-section">
          <div
            className="musician-profiles-slide-row"
            id="musician-profiles-slide"
          >
            {props.musicians.map((musician, index) => {
              return (
                <div className="slide-col" key={index}>
                  <Profile artist={musician} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <RightArrow buttonClick={buttonClick} />
    </div>
  );
}

function RightArrow(props) {
  const buttonClick = (n) => {
    props.buttonClick(n);
  };

  return (
    <button
      className="musician-profiles-slide-button"
      onClick={() => {
        buttonClick(1);
      }}
    >
      &#10095;
    </button>
  );
}

function LeftArrow(props) {
  const buttonClick = (n) => {
    props.buttonClick(n);
  };

  return (
    <button
      className="musician-profiles-slide-button"
      onClick={() => {
        buttonClick(-1);
      }}
    >
      &#10094;
    </button>
  );
}

export default MusicianProfiles;
