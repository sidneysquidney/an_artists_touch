// video for css slide transition - do not change

import { useState } from "react";
import { useEffect } from "react";

import "./Learning8.css";

function Learning8() {
  const [index, setIndex] = useState(0);

  const quotes = [
    "quote1",
    "quote2",
    "quote3",
    "quote4a sdfasdf fasdfas dfafd adfsasdf asdf asdf adsf fads fdsaf adf af asdf asdf asdf ads fasdf asdf asd fasd fads fasd dfasf dasf asd fas",
  ];

  const updateSliderDots = (index, previousIndex) => {
    const indexId = "bslider-dot-" + index;
    const previousIndexId = "bslider-dot-" + previousIndex;
    let dot = document.getElementById(indexId);
    let previousDot = document.getElementById(previousIndexId);
    dot.style.color = "#3d77ea";
    previousDot.style.color = "#16374b";
    return dot;
  };

  const slide = document.getElementById("bslide");

  const buttonClick = (n) => {
    let i = index;
    i += n;
    if (i >= 0 && i < quotes.length) {
      updateSliderDots(i, index);
      setIndex(i);
      slide.style.transform = "translateX(-" + i * 800 + "px)";
    }
  };
  return (
    <div>
      <h1>straight from video</h1>
      <div className="bcontainer">
        <div className="btestimonial">
          <div className="bslide-row" id="bslide">
            {quotes.map((quote) => {
              return (
                <div className="bslide-col">
                  <p>{quote}</p>
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => {
            buttonClick(-1);
          }}
        >
          left
        </button>
        <button
          onClick={() => {
            buttonClick(1);
          }}
        >
          right
        </button>
      </div>

      <div className="bslider-dots">
        {quotes.map((quote, index) => {
          return (
            <p id={"bslider-dot-" + index} key={index}>
              ●
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Learning8;
