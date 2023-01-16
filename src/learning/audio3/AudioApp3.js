import ReactAudioPlayer from "react-audio-player";
import ReactDOM from "react-dom";
import import_tracks from "./tracks";
import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function AudioApp3(props) {
  const tracks = import_tracks;

  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const { track_duration, title, artist, color, image, audioSrc } =
    tracks[trackIndex];

  // Refs - do i need these now??
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  return (
    <div>
      <h2>audio player 3</h2>
      <p
        onClick={() => {
          setTrackIndex(0);
        }}
      >
        track 1
      </p>
      <p
        onClick={() => {
          setTrackIndex(1);
        }}
      >
        track 2
      </p>
      <p
        onClick={() => {
          setTrackIndex(2);
        }}
      >
        track 3
      </p>
      //{" "}
      <ReactAudioPlayer
        src={audioSrc}
        autoPlay={isPlaying}
        controls
        onPlay={() => {
          setIsPlaying(true);
        }}
        onPause={() => {
          setIsPlaying(false);
        }}
      />
      <button
        onClick={() => {
          setIsPlaying(true);
          audioRef.current.play();
        }}
      >
        play
      </button>
      <button
        onClick={() => {
          setIsPlaying(false);
          audioRef.current.pause();
        }}
      >
        pause
      </button>
      <button
        onClick={() => {
          setTrackIndex((trackIndex + 1) % tracks.length);
        }}
      >
        next
      </button>
      <button
        onClick={() => {
          setTrackIndex((trackIndex + tracks.length - 1) % tracks.length);
        }}
      >
        pprevious
      </button>
    </div>
  );
}
