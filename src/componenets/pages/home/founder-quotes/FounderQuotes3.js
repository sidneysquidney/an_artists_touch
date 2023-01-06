// components - left button, right button, dots, slider, founder quotes

import "./FounderQuotes3.css";
import { useState, useEffect } from "react";

function FounderQuotes3() {
  const quotes = ["quote1", "quote2", "quote3", "quote4", "quote5"];
  const [index, setIndex] = useState(0);

  //   updates colours of slider dots as index changes
  const updateSliderDots = (currentIndex, newIndex) => {
    let oldDot = document.getElementById("slider_dot_" + currentIndex);
    let newDot = document.getElementById("slider_dot_" + newIndex);
    oldDot.style.color = "var(--dark-blue)";
    newDot.style.color = "var(--aqua-blue)";
  };

  const updateSlide = (n) => {
    let newIndex = index + n;
    if (newIndex >= 0 && newIndex < quotes.length) {
      updateSliderDots(index, newIndex);
      setIndex(newIndex);
    }
  };

  //   starts first slide dot as blue
  useEffect(() => {
    let startDot = document.getElementById("slider_dot_0");
    startDot.style.color = "var(--aqua-blue)";
  }, []);

  return (
    <div className="founder_quotes_container">
      <h2 className="alternate_section_title">Quotes from the founder</h2>
      <Slider currentIndex={index} quotes={quotes} updateSlide={updateSlide} />
      <SliderDots quoteCount={quotes.length} currentIndex={index} />
    </div>
  );
}

function Slider(props) {
  // props are currentIndex, quotes, updateSlide

  const updateSlide = (n) => {
    props.updateSlide(n);
  };

  return (
    <div className="slider_container">
      <LeftArrow updateSlide={updateSlide} />
      <div className="quote_container">
        <div className="slider_row">
          {props.quotes.map((quote, index) => {
            return (
              <div className="slider_column" key={index}>
                <p>{quote}</p>
              </div>
            );
          })}
        </div>
      </div>

      <RightArrow updateSlide={updateSlide} />
    </div>
  );
}

function SliderDots(props) {
  return (
    <div className="slider_dots">
      {[...Array(props.quoteCount).keys()].map((index) => {
        return (
          <p key={index} id={"slider_dot_" + index}>
            ●
          </p>
        );
      })}
    </div>
  );
}

function RightArrow(props) {
  const updateSlide = (n) => {
    props.updateSlide(n);
  };
  return (
    <button
      onClick={() => {
        updateSlide(1);
      }}
    >
      &#10095;
    </button>
  );
}

function LeftArrow(props) {
  const updateSlide = (n) => {
    props.updateSlide(n);
  };
  return (
    <button
      onClick={() => {
        updateSlide(-1);
      }}
    >
      &#10094;
    </button>
  );
}

export default FounderQuotes3;
