import pic1 from "./assets/guitar_window3.jpg";
import pic2 from "./assets/harold1edit.jpg";
import pic3 from "./assets/insolaceedit.jpg";
import song1 from "./assets/song1.mp4";
import song2 from "./assets/song2.mp4";
import song3 from "./assets/song3.mp4";

import cry from "../../../../assets/audio/cry.mp3";
import maybe from "../../../../assets/audio/maybe.mp3";
import bach from "../../../../assets/audio/bach.mp3";
import downland from "../../../../assets/audio/downland.mp3";
import peru from "../../../../assets/audio/peru.mp3";
import samba from "../../../../assets/audio/samba.mp3";

export default [
  {
    title: "I Won't Cry",
    artist: "Insolace",
    audioSrc: cry,
    image: pic1,
    color: "#00aeb0",
    track_duration: "3.18",
  },
  {
    title: "Maybe It's Just Me",
    artist: "Insolace",
    audioSrc: maybe,
    image: pic2,
    color: "#ffb77a",
    track_duration: "3.26",
  },
  {
    title: "Peruvian Spice",
    artist: "Danger Goat",
    audioSrc: peru,
    image: pic3,
    color: "#5f9fff",
    track_duration: "4.00",
  },
  {
    title: "Samba De Lo Vavio",
    artist: "Danger Goat",
    audioSrc: samba,
    image: pic1,
    color: "#00aeb0",
    track_duration: "4.43",
  },
  {
    title: "Unquiet Thoughts (John Downland)",
    artist: "Harold Gordon-Smith",
    audioSrc: downland,
    image: pic2,
    color: "#ffb77a",
    track_duration: "3.47",
  },
  {
    title: "Aus Liebe St Matthews Passion (JS Bach)",
    artist: "Harold Gordon-Smith",
    audioSrc: bach,
    image: pic3,
    color: "#5f9fff",
    track_duration: "4.28",
  },
];
