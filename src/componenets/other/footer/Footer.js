import ContactLocation from "../contact-location/ContactLocation";
import Line from "../line/Line";

import { Link } from "react-router-dom";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import React, { useState, useEffect, useRef } from "react";
import import_tracks from "../../pages/musicians/album/tracks";
import album_cover from "../../pages/musicians/album/assets/windows_logo.jpeg";

import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

import "./Footer.css";

export default function Footer(props) {
  return (
    <footer>
      {props.musicPage ? <FooterNonMusic /> : <FooterMusicPlayer />}

      {/* <FooterMusicPlayer /> */}
      <Line />
      <div className="footer-info-container">
        <div className="footer-info1">
          <div className="footer-contact-location-container">
            <h2 className="footer-title">
              Treat your windows to "An Artist's Touch
            </h2>
            <ContactLocation />
          </div>

          <div className="footer-copyright">
            <small className="footer-small">
              Copyright © 2023 An Artist’s Touch. All rights reserved | Terms of
              Service | Privacy Policy
            </small>
          </div>
        </div>
        <div className="footer-info2">
          <h3 className="footer-subtitle">The Windows</h3>
          <ul className="footer-list">
            <Link to="/contact">
              <li className="dark-blue-hover">Make A Booking</li>
            </Link>
            <Link to="/quote">
              <li className="dark-blue-hover">Get A Quote</li>
            </Link>
            <Link to="/contact">
              <li className="dark-blue-hover">Become A Window Cleaner</li>
            </Link>
          </ul>
        </div>
        <div className="footer-info3">
          <h3 className="footer-subtitle">The Arts</h3>
          <ul className="footer-list">
            <Link to="/contact">
              <li className="dark-blue-hover">Book A Concert</li>
            </Link>
            <Link to="/contact">
              <li className="dark-blue-hover">Learn An Instrument</li>
            </Link>
            <Link to="/musicians">
              <li className="dark-blue-hover">Greatest Hits</li>
            </Link>
          </ul>
        </div>
        <div className="footer-info4">
          <h3 className="footer-subtitle">Connect</h3>
          <ul className="footer-list">
            <li>
              <a href="tel:07903650715" className="dark-blue-hover">
                Phone
              </a>
            </li>
            <li>
              <a
                href="mailto:artiststouchwindows@gmail.com"
                className="dark-blue-hover"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterMusicPlayer(props) {
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
    <div className="footer-music-container">
      <div className="footer-music-info">
        <img src={album_cover} className="footer-album-image" />
        <div>
          <p className="album-title-text">{title}</p>
          <p className="album-artist-text">{artist}</p>
        </div>
      </div>
      <div className="footer-audioplayer">
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
      <div className="footer-music-right">
        <Link to="/contact" className="footer-music-contact dark-blue-hover">
          Contact
        </Link>
        <Link to="/contact" className="footer-music-contact">
          <FaInstagram className="dark-blue-hover" />
        </Link>
        <Link to="/contact" className="footer-music-contact">
          <FaFacebook className="dark-blue-hover" />
        </Link>
        <a href="tel:07903650715" className="dark-blue-hover">
          <FaPhone className="dark-blue-hover" />
        </a>
        <a
          href="mailto:artiststouchwindows@gmail.com"
          className="dark-blue-hover"
        >
          <FaEnvelope className="dark-blue-hover" />
        </a>
      </div>
    </div>
  );
}

function FooterNonMusic() {
  return (
    <div className="footer-non-music">
      <Link to="/contact" className="footer-music-contact">
        <FaInstagram className="dark-blue-hover" />
      </Link>
      <Link to="/contact" className="footer-music-contact">
        <FaFacebook className="dark-blue-hover" />
      </Link>
      <a href="tel:07847586453" className="dark-blue-hover">
        <FaPhone className="dark-blue-hover" />
      </a>
      <a
        href="mailto:artiststouchwindows@gmail.com"
        className="dark-blue-hover"
      >
        <FaEnvelope className="dark-blue-hover" />
      </a>
    </div>
  );
}
