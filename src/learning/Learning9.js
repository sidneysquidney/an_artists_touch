// slider working in full with edits - do not change

// change class names
// do overal layout
// specific styling
// make code cleaner with callbacks and seperate components

import { useState } from "react";
import { useEffect } from "react";

import "./Learning9.css";

function Learning9() {
  const [index, setIndex] = useState(0);

  const quotes = [
    "quote1",
    "quote2",
    "quote3",
    "quote4a sdfasdf fasdfas dfafd adfsasdf asdf asdf adsf fads fdsaf adf af asdf asdf asdf ads fasdf asdf asd fasd fads fasd dfasf dasf asd fas",
    "quote 5",
  ];

  const updateSliderDots = (index, previousIndex) => {
    const indexId = "learning-slider-dot-" + index;
    const previousIndexId = "learning-slider-dot-" + previousIndex;
    let dot = document.getElementById(indexId);
    let previousDot = document.getElementById(previousIndexId);
    dot.style.color = "#3d77ea";
    previousDot.style.color = "#16374b";
    return dot;
  };

  const buttonClick = (n) => {
    const slide = document.getElementById("learning-slide");
    let i = index;
    i += n;
    if (i >= 0 && i < quotes.length) {
      updateSliderDots(i, index);
      setIndex(i);
      slide.style.transform = "translateX(-" + i * 800 + "px)";
    }
  };

  useEffect(() => {
    let startDot = document.getElementById("learning-slider-dot-0");
    startDot.style.color = "var(--aqua-blue)";
    let slideRow = document.getElementsByClassName("learning-slide-row")[0];
    slideRow.style.width = 800 * quotes.length + "px";
  }, []);

  return (
    <div className="learning-founder-container-full">
      <h2 className="learning-header alternate-section-title">learning9 </h2>
      <Slider quotes={quotes} buttonClick={buttonClick} />
      <SliderDots quoteCount={quotes.length} />
    </div>
  );
}

function SliderDots(props) {
  return (
    <div className="learning-slider-dots">
      {[...Array(props.quoteCount).keys()].map((index) => {
        return (
          <p id={"learning-slider-dot-" + index} key={index}>
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
    <div className="learning-and-buttons-container">
      <LeftArrow buttonClick={buttonClick} />
      <div className="learning-container">
        <div className="learning-testimonial">
          <div className="learning-slide-row" id="learning-slide">
            {props.quotes.map((quote, index) => {
              return (
                <div className="learning-slide-col" key={index}>
                  <p className="learning-text">"{quote}"</p>
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
      className="learning-button"
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
      className="learning-button"
      onClick={() => {
        buttonClick(-1);
      }}
    >
      &#10094;
    </button>
  );
}

export default Learning9;
