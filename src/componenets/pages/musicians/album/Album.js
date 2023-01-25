import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./AudioComponent.css";
import "./Album.css";
import React, { useState, useEffect, useRef } from "react";
import import_tracks from "./tracks";
import album_cover from "./assets/windows_logo.jpeg";

import { FaClock } from "react-icons/fa";

export default function Album() {
  const tracks = import_tracks;

  const [trackIndex, setTrackIndex] = useState(0);

  // Destructure for conciseness
  const { track_duration, title, artist, color, image, audioSrc } =
    tracks[trackIndex];

  // these 2 from audiocomponent
  const onNextButton = () => {
    setTrackIndex((trackIndex + 1) % tracks.length);
  };

  const onPreviousButton = () => {
    setTrackIndex((trackIndex + tracks.length - 1) % tracks.length);
  };

  return (
    <div className="album-container">
      <h2 className="alternate-section-title">
        Greatest Hits - An Artist's Touch{" "}
      </h2>
      <div className="album-info-container">
        <div className="picture-player-container">
          <img
            className="album-image"
            src={album_cover}
            alt={`track artwork for ${title} by ${artist}`}
          />

          <AudioPlayer
            // autoPlay={false}
            showSkipControls
            showJumpControls={false}
            // autoPlayAfterSrcChange={false}
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
                      setTrackIndex(index);
                    }}
                  >
                    {index + 1}
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
                  <p
                    className={
                      index == trackIndex
                        ? "text-aqua-blue album-artist-text"
                        : "album-artist-text"
                    }
                  >
                    {track.artist}
                  </p>
                </div>
                <div className="album-header3">
                  <p
                    className={
                      index == trackIndex
                        ? "text-aqua-blue album-duration-text"
                        : "album-duration-text"
                    }
                  >
                    {track.track_duration}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
