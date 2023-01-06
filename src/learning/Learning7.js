// video 2 css transitions in react

import { useState } from "react";
import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./Learning7.module.css";

import abbey_road from "../assets/abbey_road.jpeg";
import earing from "../assets/earing.jpg";
import guitar_smoke from "../assets/guitar_smoke.jpg";
import guitar_window from "../assets/guitar_window.jpg";
import mole_cleaning from "../assets/mole_cleaning.jpg";

function Learning7() {
  const [index, setIndex] = useState(0);

  const quotes = [
    "quote1",
    "quote2",
    "quote3",
    "quote4a sdfasdf fasdfas dfafd adfsasdf asdf asdf adsf fads fdsaf adf af asdf asdf asdf ads fasdf asdf asd fasd fads fasd dfasf dasf asd fas",
  ];

  const pictures = [
    abbey_road,
    earing,
    guitar_smoke,
    guitar_window,
    mole_cleaning,
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
      updateSliderDots(i, index);
      setIndex(i);
      slide.style.transform = "translateX(-" + i * 800 + "px)";
    }
  };

  const pic = false;
  return (
    <div className={styles.container_slider_and_dots}>
      <div className={styles.slide_button_container}>
        <button
          onClick={() => {
            buttonClick(-1);
          }}
        >
          &#10094;
        </button>
        <div className={styles.slide_container}>
          <div className={styles.quote_container}>
            {pic ? (
              <Pictures pictures={pictures} />
            ) : (
              <Quotes quotes={quotes} />
            )}
          </div>
        </div>

        <button
          onClick={() => {
            buttonClick(1);
          }}
        >
          &#10095;
        </button>
      </div>
      <div className={styles.slider_dots}>
        {quotes.map((quote, index) => {
          return (
            <p id={styles.slider_dot_ + index} key={index}>
              ●
            </p>
          );
        })}
      </div>
    </div>
  );
}

function Pictures(props) {
  return (
    <div className={styles.carousel_slide}>
      {props.pictures.map((picture) => {
        return <img src={picture} className={styles.picture_item} />;
      })}
    </div>
  );
}

function Quotes(props) {
  return (
    <div className={styles.slide_row} id={styles.slide}>
      {props.quotes.map((quote) => {
        return (
          <div className={styles.slide_column}>
            <p className={styles.quote_item}>{quote}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Learning7;
