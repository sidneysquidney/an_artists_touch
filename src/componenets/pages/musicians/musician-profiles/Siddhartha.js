import ProfileClass from "./ProfileClass";

import danger_goat_pic from "../../../../assets/dg2edit.jpg";

const siddhartha = new ProfileClass(
  "Siddhartha Lethbridge",
  "Trombonist and story-teller for Danger Goat. Innovators in onstage story-telling, Danger Goat is a high-energy music group drawing influence from a variety of genres from around the world. With their unique instrumentation and heavy grooves, Danger Goat promise to get everyone dancing no matter where they perform.",
  "https://www.dangergoat.co.uk/",
  danger_goat_pic,
  true,
  false,
  {
    facebook: "https://www.facebook.com/DangerGoat",
    instagram: "https://www.instagram.com/danger.goat/",
    spotify:
      "https://open.spotify.com/artist/0NPiXL2ec0ixSN6j0PbGLo?si=4-pE57nqR_eTItEr4aaMaQ",
  }
);

export default siddhartha;
