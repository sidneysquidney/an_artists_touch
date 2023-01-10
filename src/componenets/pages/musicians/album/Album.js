import song from "../../../../assets/audio/song2.mp4";
import React, { Component } from "react";
import { useState, useEffect } from "react";

import { songs } from "./Songs.js";

export default function Album() {
  const songs_list = songs;
  // const [songs, setSoungs] = useState(songs);
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio(songs[0].song));
  const [songIndex, setSongIndex] = useState(0);

  // const audio = new Audio(song);

  const playPause = () => {
    // setPlaying(!playing);
    if (!playing) {
      audio.play();
      console.log("playing");
    } else {
      audio.pause();
      console.log("not playing");
    }
    setPlaying(!playing);
  };

  const newAudio = () => {
    if (playing) {
      audio.pause();
      setAudio(new Audio(songs[songIndex].song));
      audio.play();
    } else {
      setAudio(new Audio(songs[songIndex].song));
    }
  };

  const changeSongIndex = (n) => {
    let index = songIndex + n;
    if (index >= 0 && index < songs.length) {
      setSongIndex(index);
      console.log("setting new audio");
      newAudio();
      // setAudio(new Audio(songs[songIndex].song));
    }
  };

  return (
    <div>
      <h2 className="alternate-section-title">
        An Artist's Touch - Greatest Hits
      </h2>
      <p>the album!!!</p>
      <p>{songs_list[songIndex].title}</p>
      {/* <p>{audio.title}</p> */}
      <p>{songIndex}</p>

      {/* <button
        onClick={() => {
          playPause();
        }}
      >
        play or pause
      </button> */}

      <button
        onClick={() => {
          // setAudio(songs[songIndex + 1]);
          changeSongIndex(-1);
        }}
      >
        previous
      </button>
      <button onClick={playPause}>Play Pause</button>
      <button
        onClick={() => {
          // setAudio(songs[songIndex + 1]);
          changeSongIndex(1);
        }}
      >
        next
      </button>
    </div>
  );
}

// Import your audio file

class MusicPlayer extends Component {
  // Create state
  state = {
    // Get audio file in a variable
    audio: new Audio(song),

    // Set initial state of song
    isPlaying: false,
  };

  // Main function to handle both play and pause operations
  playPause = () => {
    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {
      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div>
        {/* Show state of song on website */}
        <p>{this.state.isPlaying ? "Song is Playing" : "Song is Paused"}</p>

        {/* Button to call our main function */}
        <button onClick={this.playPause}>Play | Pause</button>
      </div>
    );
  }
}
