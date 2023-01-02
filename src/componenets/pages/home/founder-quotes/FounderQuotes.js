import "./FounderQuotes.css";
import { useState } from "react";

export default function FounderQuotes() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    "They say eyes are the windows to the soul. That means windows are the eyes of the house... and who wants dirt in their eyes!",
    "quote1",
    "quote2",
    "quote3",
    "quote4",
  ];

  const goToSlide = (n) => {
    updateSliderDots(n, quoteIndex);
    setQuoteIndex(n);
  };

  const updateSliderDots = (index, previousIndex) => {
    const indexClassName = "slider-dot-" + index;
    const previousIndexClassName = "slider-dot-" + previousIndex;
    let dot = document.getElementsByClassName(indexClassName)[0];
    let previousDot = document.getElementsByClassName(
      previousIndexClassName
    )[0];
    dot.style.color = "#3d77ea";
    previousDot.style.color = "#16374b";
    return dot;
  };

  const updateQuoteIndex = (change) => {
    let previousIndex = quoteIndex;
    let index = quoteIndex;
    index += change;
    if (index === quotes.length) {
      index = 0;
    } else if (index === -1) {
      index = quotes.length - 1;
    }
    setQuoteIndex(index);
    updateSliderDots(index, previousIndex);
  };

  return (
    <div className="founder-quotes-section">
      <h2 className="alternate-section-title">Quotes from the founders</h2>
      <div className="carousel">
        <button
          className="carousel-button prev"
          onClick={() => {
            updateQuoteIndex(-1);
          }}
        >
          &#10094;
        </button>
        <p className="founder-quote">{quotes[quoteIndex]}</p>

        <button
          className="carousel-button next"
          onClick={() => {
            updateQuoteIndex(1);
          }}
        >
          &#10095;
        </button>
      </div>
      <div className="slider-dots">
        {quotes.map((quote, index) => {
          return (
            <p
              className={"slider-dot-" + index}
              key={index}
              onClick={() => {
                goToSlide(index);
              }}
            >
              ●
            </p>
          );
        })}
      </div>
    </div>
  );
}
