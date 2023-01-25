import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./AudioComponent.css";

import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegPauseCircle } from "react-icons/fa";

// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS
import React, { useState, useEffect, useRef } from "react";
import import_tracks from "./tracks";

function AudioComponent() {
  const tracks = import_tracks;

  const [trackIndex, setTrackIndex] = useState(1);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const { track_duration, title, artist, color, image, audioSrc } =
    tracks[trackIndex];

  // Refs - do i need these now??
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const onNextButton = () => {
    setTrackIndex((trackIndex + 1) % tracks.length);
  };

  const onPreviousButton = () => {
    setTrackIndex((trackIndex + tracks.length - 1) % tracks.length);
  };

  return (
    <div>
      <AudioPlayer
        autoPlay={false}
        showSkipControls
        showJumpControls={false}
        autoPlayAfterSrcChange={false}
        hasDefaultKeyBindings={false}
        src={audioSrc}
        onClickNext={onNextButton}
        onClickPrevious={onPreviousButton}
        onPlay={(e) => console.log("onPlay")}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        layout="stacked-reverse"

        // other props here
      />
      <p>{title}</p>
      <p>{artist}</p>
      {/* <img src={image}></img> */}
      <button
        onClick={() => {
          setTrackIndex(0);
        }}
      >
        song 1
      </button>
      <button
        onClick={() => {
          setTrackIndex(1);
        }}
      >
        song 2
      </button>
      <button
        onClick={() => {
          setTrackIndex(2);
        }}
      >
        song 3
      </button>
      <AudioPlayer
        autoPlay
        showSkipControls
        showJumpControls={false}
        autoPlayAfterSrcChange={false}
        hasDefaultKeyBindings={false}
        src={audioSrc}
        onClickNext={onNextButton}
        onClickPrevious={onPreviousButton}
        onPlay={(e) => console.log("onPlay")}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        layout="stacked-reverse"

        // other props here
      />
    </div>
  );
}

export default AudioComponent;
