// video 2 css transitions in react

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
    const indexId = "slider-dot-" + index;
    const previousIndexId = "slider-dot-" + previousIndex;
    let dot = document.getElementById(indexId);
    let previousDot = document.getElementById(previousIndexId);
    dot.style.color = "#3d77ea";
    previousDot.style.color = "#16374b";
    return dot;
  };

  const slide = document.getElementById("slide");

  const buttonClick = (n) => {
    let i = index;
    i += n;
    if (i >= 0 && i < quotes.length) {
      //   updateSliderDots(i, index);
      setIndex(i);
      slide.style.transform = "translateX(-" + i * 800 + "px)";
    }
  };
  return (
    <div>
      <h1>straight from video</h1>
      <div className="container">
        <div className="tetimonial">
          <div className="slide-row" id="slide">
            {quotes.map((quote) => {
              return (
                <div className="slide-col">
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

      <p>*****</p>
    </div>
  );

  //   return (
  //     <div className="8container-slider_and-dots">
  //       <div className="8slide-button-container">
  //         <button
  //           onClick={() => {
  //             buttonClick(-1);
  //           }}
  //         >
  //           &#10094;
  //         </button>
  //         <div className="8slide-container">
  //           <div className="8quote-container">
  //             <Quotes quotes={quotes} />
  //           </div>
  //         </div>

  //         <button
  //           onClick={() => {
  //             buttonClick(1);
  //           }}
  //         >
  //           &#10095;
  //         </button>
  //       </div>
  //       <div className="8slider_dots">
  //         {quotes.map((quote, index) => {
  //           return (
  //             <p id={"8slider_dot_" + index} key={index}>
  //               ●
  //             </p>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
}

function Quotes(props) {
  return (
    <div className="8slide_row" id="slide">
      {props.quotes.map((quote) => {
        return (
          <div className="8slide_column">
            <p className="8quote_item">{quote}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Learning8;
