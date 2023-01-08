import Profile from "./Profile";

import "./MusicianProfiles.css";

import siddhartha from "./Siddhartha.js";
import harold from "./Harold.js";
import insolace from "./Insolace.js";

export default function MusiciansProfiles() {
  const musicians = [siddhartha, harold, insolace];
  return (
    <div className="bg-dark-blue">
      {musicians.map((musician) => {
        return <Profile artist={musician} />;
      })}
    </div>
  );
}

// import { useState } from "react";
// import { useEffect } from "react";

// function MusicianProfiles() {
//   const [index, setIndex] = useState(0);

//   const musician_profiles = [];

//   const updateSliderDots = (index, previousIndex) => {
//     const indexId = "musician-profiles-slide-dot-" + index;
//     const previousIndexId = "musician-profiles-slide-dot-" + previousIndex;
//     let dot = document.getElementById(indexId);
//     let previousDot = document.getElementById(previousIndexId);
//     dot.style.color = "white";
//     previousDot.style.color = "var(--dark-blue)";
//     return dot;
//   };

//   const buttonClick = (n) => {
//     const slide = document.getElementById("musician-profiles-slide");
//     let i = index;
//     i += n;
//     if (i >= 0 && i < musician_profiles.length) {
//       updateSliderDots(i, index);
//       setIndex(i);
//       slide.style.transform = "translateX(-" + i * 800 + "px)";
//     }
//   };

//   useEffect(() => {
//     let startDot = document.getElementById("musician-profiles-slide-dot-0");
//     startDot.style.color = "white";
//     let slideRow = document.getElementsByClassName(
//       "musician-profiles-slide-row"
//     )[0];
//     slideRow.style.width = 800 * musician_profiles.length + "px";
//   }, []);

//   return (
//     <div className="musician-profiles-container-full bg-turquoise">
//       <Slider musician_profiles={musician_profiles} buttonClick={buttonClick} />
//       <SliderDots musician_profilesCount={musician_profiles.length} />
//     </div>
//   );
// }

// function SliderDots(props) {
//   return (
//     <div className="slide-dots">
//       {[...Array(props.musician_profilesCount).keys()].map((index) => {
//         return (
//           <p id={"musician-profiles-slide-dot-" + index} key={index}>
//             ●
//           </p>
//         );
//       })}
//     </div>
//   );
// }

// function Slider(props) {
//   const buttonClick = (n) => {
//     props.buttonClick(n);
//   };

//   return (
//     <div className="slide-buttons-container">
//       <LeftArrow buttonClick={buttonClick} />
//       <div className="slide-container">
//         <div className="slide-section">
//           <div
//             className="musician-profiles-slide-row"
//             id="musician-profiles-slide"
//           >
//             {props.musician_profiles.map((musician_profile, index) => {
//               return (
//                 <div className="slide-col" key={index}>
//                   <p className="text-center musician-profiles-text">
//                     "{musician - profiles.quote}"
//                   </p>
//                   <small className="musician-profiles-author text-white text-center">
//                     {musician - profiles.author}
//                   </small>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <RightArrow buttonClick={buttonClick} />
//     </div>
//   );
// }

// function RightArrow(props) {
//   const buttonClick = (n) => {
//     props.buttonClick(n);
//   };

//   return (
//     <button
//       className="musician-profiles-slide-button"
//       onClick={() => {
//         buttonClick(1);
//       }}
//     >
//       &#10095;
//     </button>
//   );
// }

// function LeftArrow(props) {
//   const buttonClick = (n) => {
//     props.buttonClick(n);
//   };

//   return (
//     <button
//       className="musician-profiles-slide-button"
//       onClick={() => {
//         buttonClick(-1);
//       }}
//     >
//       &#10094;
//     </button>
//   );
// }

// export default MusicianProfiles;
