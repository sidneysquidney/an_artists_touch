// other video practicing useEffect and css transitions

import { useState } from "react";
import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./Learning6.module.css";

function Learning6() {
  const [index, setIndex] = useState(0);
  const [isEnter, setIsEnter] = useState(false);

  const quotes = ["quote1", "quote2", "quote3", "quote4"];

  const buttonClick = (n) => {
    let i = index;
    i += n;
    if (i < 0) {
      i = quotes.length - 1;
    } else if (i == quotes.length) {
      i = 0;
    }
    setIndex(i);
    setIsEnter(!isEnter);
    console.log(isEnter);
  };

  return (
    <div>
      <h1 className={styles.sidney}>Learning 6 - using CSSTransition</h1>
      <CSSTransition
        //   state - boolean to know if is in enter fase or in exit true=enter, false=exit.
        in={isEnter}
        //   duration 5000 = 5 seconds
        timeout={1000}
        // classname prefix
        classNames="myclass"
      >
        <p className={styles.text}> {quotes[index]}</p>
      </CSSTransition>
      <p className={styles.sidney + " rando"}>squidneyey</p>
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
  );
}

export default Learning6;
