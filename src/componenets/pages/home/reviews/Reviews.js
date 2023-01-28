import { useState } from "react";
import { useEffect } from "react";

import "./Reviews.css";
// import reviews_image from "../../../../assets/reviews.png";
const reviews_image =
  "https://lh3.googleusercontent.com/aOrhyXheyMSZ12OZmvWIo5wh5oOxiv_xFOVJABK7qIiqW7ZX5Ww6P2ALmcJeezLwbI5yyig_-LOadArfzII0ZdnS9bARi1XVtoLLech1a6aHmVnY8xGK8amkXY-L06QcQScHeST-CTmzmGb81e1_xlOIwsxVzuMpeSsU4UcaFCzoENzk8nGl9kKjmEBeVzlKiQ37AoSc3o2u2M75g3cmyKnjKS_PV25HT_YvZ1CpyC6S_FDzYTLxhgtH-F6bc0Vq5cp2r8m7FoLlt-5PttmmznzDfvHaaabayne0FHG7nDrbvsCZ0T8WdMjwutkFLUVKesK-eROx3_bQE2_OoY5hOp2JRyYiwHRm8UwXwdYjJLAQHGZcLxOBB_t38aZoW7vFRHujw7OQXDprdGdjFvy1-f9riD_VHKE-FG978Yo1FwbFhjvrfo_N3m8NDx9SkbUhl6KAYncU67O9RG-ooitmoYBsAOtEbk-TnbUpvjKOgFa4TBjoys2s5H9mjnLC9_-rZTasjO10T9NGJlSZNqzkCkK2JRlts5aVgMjxZuWstqAE_v5Xfh7JKi045rkRERvyiKVcNFZWwxJkcHOLMgJeUs8WaDIbxBjArvU4OvxmUqsGO0Dl-lGn1GuCPQLz9zGztUldZGGTmI1vqab5IdmkGpRSVR_7yCyox35H0Pz0Hg9OEo8M5qQi3lAImykJpKSj-MA6AX9jPNeK9HuZw5G0rTJPXYYBXDaN95N1DXo1nP-QkOexIyjg6CCImhro5uHXhIby56G0gUcViyLtk6X0kKpNlV7lxuaUQtWDJgz04HTp1-ZBRfAyTd_wtoCFofIOV_iQVaEAkeLJVvu6FSMgNS_hMNW3O8RJjLDkqSOlzRzR4GIm0ggCiIk3zAGZddM3lt5cyybURbjQWGO7xM04DgiraSQeX_td6Z1h-btdfJlggOXT=w742-h248-no?authuser=0";

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
