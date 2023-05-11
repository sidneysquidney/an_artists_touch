// slider working in full with edits - do not change

// change class names
// do overal layout
// specific styling
// make code cleaner with callbacks and seperate components

import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import "./FounderQuotes.css";

function FounderQuotes() {
  const [index, setIndex] = useState(0);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const windowWidth = windowSize.current[0];

  const quotes = [
    "If the doors of perception were cleansed every thing would appear to man as it is, Infinite. For man has closed himself up, till he sees all things thro' narrow chinks of his winodws.",
    "They say eyes are the windows to the soul. That means windows are the eyes of the house... and who wants dirt in their eyes!",
    "In the universe, there are things that are known, and things that are unknown, and in between, there are windows.",
    "Look outside. If you are distressed by something there, the pain is not due to the thing itself, but to your perception of it; and this you have the power to revoke at any moment, by cleaning your windows.",
    "The wine of Divine Grace is limitless: all limits come only from the faults of the cup. Moonlight floods the whole sky from horizon to horizon; How much it can fill your room depends on its windows. Grant a great dignity, my friend, to the windows of your life; Love has designed it to see His eternal love."
  ];

  const sliderWidth = () => {
    if (windowWidth > 1024) {
      return 800;
    } else if (windowWidth < 600) {
      return 500;
    } else {
      return 250;
    }
  };

  const updateSliderDots = (index, previousIndex) => {
    const indexId = "quote-slide-dot-" + index;
    const previousIndexId = "quote-slide-dot-" + previousIndex;
    let dot = document.getElementById(indexId);
    let previousDot = document.getElementById(previousIndexId);
    dot.style.color = "#3d77ea";
    previousDot.style.color = "#16374b";
    return dot;
  };

  const buttonClick = (n) => {
    const slide = document.getElementById("quote-slide");
    let i = index;
    i += n;
    if (i >= 0 && i < quotes.length) {
      updateSliderDots(i, index);
      setIndex(i);
      // changed
      slide.style.transform = "translateX(-" + i * 800 + "px)";
      console.log(sliderWidth());
    }
  };

  useEffect(() => {
    let startDot = document.getElementById("quote-slide-dot-0");
    startDot.style.color = "var(--aqua-blue)";
    let slideRow = document.getElementsByClassName("quote-slide-row")[0];
    slideRow.style.width = 800 * quotes.length + "px";
  }, []);

  return (
    <div className="founder-container-full">
      <h2 className="alternate-section-title">Quotes from the founders</h2>
      <Slider quotes={quotes} buttonClick={buttonClick} />
      <SliderDots quoteCount={quotes.length} />
    </div>
  );
}

function SliderDots(props) {
  return (
    <div className="slide-dots">
      {[...Array(props.quoteCount).keys()].map((index) => {
        return (
          <p id={"quote-slide-dot-" + index} key={index}>
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
    <div className="slide-buttons-container section-container">
      <LeftArrow buttonClick={buttonClick} />
      <div className="slide-container">
        <div className="slide-section">
          <div className="quote-slide-row" id="quote-slide">
            {props.quotes.map((quote, index) => {
              return (
                <div className="slide-col" key={index}>
                  <p className="text-center">"{quote}"</p>
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
      className="quote-slide-button"
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
      className="quote-slide-button"
      onClick={() => {
        buttonClick(-1);
      }}
    >
      &#10094;
    </button>
  );
}

export default FounderQuotes;
