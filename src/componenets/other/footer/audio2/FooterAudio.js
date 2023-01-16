import React from "react";
import ReactDOM from "react-dom";
import AudioPlayer from "./AudioPlayer";
import tracks from "./tracks";

export default function FooterAudio() {
  return <AudioPlayer tracks={tracks} />;
}
