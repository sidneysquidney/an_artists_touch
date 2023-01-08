import { useState } from "react";
import { useEffect } from "react";

function Reviews() {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      quote:
        "They say eyes are the windows to the soul. That means windows are the eyes of the house... and who wants dirt in their eyes!",
      author: "Harold Gordon-Smith",
    },
    { quote: "review2", author: "reviewer2" },
    { quote: "review3", author: "author3" },
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
      <h2>Reviews</h2>
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
    <div className="slide-buttons-container">
      <LeftArrow buttonClick={buttonClick} />
      <div className="slide-container">
        <div className="slide-section">
          <div className="review-slide-row" id="review-slide">
            {props.reviews.map((review, index) => {
              return (
                <div className="slide-col" key={index}>
                  <p className="text-center review-text">"{review.quote}"</p>
                  <small className="review-author text-white text-center">
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
