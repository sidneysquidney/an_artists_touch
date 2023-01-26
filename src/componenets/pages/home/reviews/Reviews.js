import { useState } from "react";
import { useEffect } from "react";

import "./Reviews.css";
import reviews_image from "../../../../assets/reviews.png";

function Reviews() {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      quote: "Prompt, professional, and a fantastic clean.",
      author: "Nathalie Spoons",
    },
    { quote: "Good price, good job. Thanks guys", author: "Kabir Collins" },
    {
      quote:
        "I only have my windows cleaned in the traditional style. I can confirm that the service was brilliant with, dare I say it, 'An Artist's Touch' finish.",
      author: "Lina May",
    },
  ];

  const updateSliderDots = (index, previousIndex) => {
    const indexId = "review-slide-dot-" + index;
    const previousIndexId = "review-slide-dot-" + previousIndex;
    let dot = document.getElementById(indexId);
    let previousDot = document.getElementById(previousIndexId);
    dot.style.color = "white";
    previousDot.style.color = "var(--dark-blue)";
    return dot;
  };

  const buttonClick = (n) => {
    const slide = document.getElementById("review-slide");
    let i = index;
    i += n;
    if (i >= 0 && i < reviews.length) {
      updateSliderDots(i, index);
      setIndex(i);
      slide.style.transform = "translateX(-" + i * 800 + "px)";
    }
  };

  useEffect(() => {
    let startDot = document.getElementById("review-slide-dot-0");
    startDot.style.color = "white";
    let slideRow = document.getElementsByClassName("review-slide-row")[0];
    slideRow.style.width = 800 * reviews.length + "px";
  }, []);

  return (
    <div className="review-container-full bg-turquoise">
      <img src={reviews_image} className="reviews-image"></img>
      <Slider reviews={reviews} buttonClick={buttonClick} />
      <SliderDots reviewCount={reviews.length} />
    </div>
  );
}

function SliderDots(props) {
  return (
    <div className="slide-dots">
      {[...Array(props.reviewCount).keys()].map((index) => {
        return (
          <p id={"review-slide-dot-" + index} key={index}>
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
          <div className="review-slide-row" id="review-slide">
            {props.reviews.map((review, index) => {
              return (
                <div className="slide-col" key={index}>
                  <p className=" review-text">"{review.quote}"</p>
                  <small className="review-author text-white">
                    {review.author}
                  </small>
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
      className="review-slide-button"
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
      className="review-slide-button"
      onClick={() => {
        buttonClick(-1);
      }}
    >
      &#10094;
    </button>
  );
}

export default Reviews;
