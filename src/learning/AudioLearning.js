import song1 from "../assets/audio/song1.mp4";
import song2 from "../assets/audio/song2.mp4";
import song3 from "../assets/audio/song3.mp4";
import song4 from "../assets/audio/song4.mp4";
import song5 from "../assets/audio/song5.mp4";
import song6 from "../assets/audio/song6.mp4";
import mole from "../assets/harold1edit.jpg";
import dg from "../assets/dg2edit.jpg";
import insolace from "../assets/insolaceedit.jpg";

const tracks = [
  {
    title: "song 1",
    artist: "danger goat",
    audioSrc: song1,
    image: dg,
    color: "red",
  },
  {
    title: "bach",
    artist: "harold",
    audioSrc: song2,
    image: mole,
    color: "blue",
  },
  {
    title: "guitar",
    artist: "insolace",
    audioSrc: song3,
    image: insolace,
    color: "green",
  },
];

function AudioLearning() {
  return <AudioPlayer tracks={tracks} />;
}

function AudioPlayer() {
  return (
    <div>
      <h2>audio practice 1</h2>
    </div>
  );
}

export { AudioLearning };
