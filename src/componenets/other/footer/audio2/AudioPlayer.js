import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import "./styles.css";

import { FaClock } from "react-icons/fa";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
 */
const AudioPlayer = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const { track_duration, title, artist, color, image, audioSrc } =
    tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  // const trackStyling = `
  //   -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  // `;

  const playPauseSymbol = () => {
    if (isPlaying) {
      return "||";
    } else {
      return "▶";
    }
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="album-container">
      <h2 className="alternate-section-title">
        Greatest Hits - An Artist's Touch{" "}
      </h2>
      <div className="album-info-container">
        <div className="picture-player-container">
          <img
            className="artwork2"
            src={image}
            alt={`track artwork for ${title} by ${artist}`}
          />
          <h2 className="title2">{title}</h2>
          <h3 className="artist2">{artist}</h3>
          <AudioControls
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            onPlayPauseClick={setIsPlaying}
          />
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="progress2"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            // style={{ background: trackStyling }}
          />
        </div>
        <div className="album-text-container">
          <div className="album-header">
            <div className="album-header1">
              <p className="album-header-text">#</p>
            </div>
            <div className="album-header2">
              <p className="album-header-text">TITLE</p>
            </div>
            <div className="album-header3">
              <FaClock />
            </div>
          </div>
          <div className="album-line"></div>
          {tracks.map((track, index) => {
            return (
              <div className="album-track">
                <div className="album-header1">
                  <p
                    className={
                      index == trackIndex
                        ? "text-aqua-blue album-number-text"
                        : "album-number-text"
                    }
                    onClick={() => {
                      if (index == trackIndex) {
                        setIsPlaying(!isPlaying);
                      } else {
                        setTrackIndex(index);
                      }
                    }}
                  >
                    {index == trackIndex ? playPauseSymbol() : index}
                  </p>
                </div>
                <div className="album-header2">
                  <p
                    className={
                      index == trackIndex
                        ? "text-aqua-blue album-title-text"
                        : "album-title-text"
                    }
                  >
                    {track.title}
                  </p>
                  <p className="album-artist-text">{track.artist}</p>
                </div>
                <div className="album-header3">
                  <p className="album-duration-text">{track.track_duration}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  /* <div className="audio-player2">
      <div className="track-info2">
        <img
          className="artwork2"
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
        />
        <h2 className="title2">{title}</h2>
        <h3 className="artist2">{artist}</h3>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress2"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          // style={{ background: trackStyling }}
        />
      </div>
    </div> */
};

export default AudioPlayer;
