// // video 2 css transitions in react

// import { useState } from "react";
// import { useEffect } from "react";
// import { CSSTransition } from "react-transition-group";

// import "./FounderQuotes2.css";

// function FounderQuotes2() {
//   const [index, setIndex] = useState(0);

//   const quotes = [
//     "quote1",
//     "quote2",
//     "quote3 asdfa sdfads f",
//     "quote4a sdfasdf fasdfas dfafd adfsasdf asdf asdf adsf fads fdsaf adf af asdf asdf asdf ads fasdf asdf asd fasd fads fasd dfasf dasf asd fas",
//   ];

//   const updateSliderDots = (index, previousIndex) => {
//     const indexId = "slider-dot-" + index;
//     const previousIndexId = "slider-dot-" + previousIndex;
//     let dot = document.getElementById(indexId);
//     let previousDot = document.getElementById(previousIndexId);
//     dot.style.color = "#3d77ea";
//     previousDot.style.color = "#16374b";
//     return dot;
//   };

//   const buttonClick = (n) => {
//     const slide = document.getElementById("slide");
//     let i = index;
//     i += n;
//     if (i >= 0 && i < quotes.length) {
//       updateSliderDots(i, index);
//       setIndex(i);
//       console.log(slide);

//       slide.style.transform = "translateX(-" + i * 800 + "px)";
//     }
//   };

//   const pic = false;
//   return (
//     <div className="section-container">
//       <div className="container-slider-and-dots">
//         <div className="slide-button-container">
//           <button
//             className="carousel-button"
//             onClick={() => {
//               buttonClick(-1);
//             }}
//           >
//             &#10094;
//           </button>
//           <div className="slide-container">
//             <div className="quote-container">
//               <div className="slide-row" id="slide">
//                 {quotes.map((quote) => {
//                   return (
//                     <div className="slide-column">
//                       <p className="quote-item">{quote}</p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           <button
//             className="carousel-button"
//             onClick={() => {
//               buttonClick(1);
//             }}
//           >
//             &#10095;
//           </button>
//         </div>
//         <div className="slider-dots">
//           {quotes.map((quote, index) => {
//             return (
//               <p id={"slider-dot-" + index} key={index}>
//                 ●
//               </p>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// function SliderDots(props) {
//   return (
//     <div className="slider-dots">
//       {props.quotes.map((quote, index) => {
//         return (
//           <p id={"slider-dot-" + index} key={index}>
//             ●
//           </p>
//         );
//       })}
//     </div>
//   );
// }

// function Quotes(props) {
//   return (
//     <div className="slide-row" id="slide">
//       {props.quotes.map((quote) => {
//         return (
//           <div className="slide-column">
//             <p className="quote-item">{quote}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default FounderQuotes2;
