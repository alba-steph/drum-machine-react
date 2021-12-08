// import logo from "./logo.svg";
import React from "react";
import "./App.css";

import Tamb from "./audio/CYCdh_VinylK1-Tamb.wav";
import ClHat01 from "./audio/CYCdh_VinylK1-ClHat01.wav";
import OpHat from "./audio/CYCdh_VinylK1-OpHat.wav";
import Shkr01 from "./audio/CYCdh_VinylK1-Shkr01.wav";
import Shkr02 from "./audio/CYCdh_VinylK1-Shkr02.wav";
import Snr01 from "./audio/CYCdh_VinylK1-Snr01.wav";
import Snr02 from "./audio/CYCdh_VinylK1-Snr02.wav";
import Kick01 from "./audio/CYCdh_VinylK1-Kick01.wav";
import Kick02 from "./audio/CYCdh_VinylK1-Kick02.wav";

class Display extends React.Component {
  render() {
    return (
      <div id="display">
        <p>{this.props.displayText}</p>
      </div>
    );
  }
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handleDrumClick = this.handleDrumClick.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }
  handleDrumClick(event) {
    let drumPad = event.target;
    /*pass description to parent*/
    this.props.onDrumClick(drumPad.id);
    /*play audio*/
    let audioElement = document.getElementById(drumPad.value);
    audioElement.currentTime = 0;
    audioElement.play();
  }

  handleKeydown(event) {
    let drumKey = event.key.toUpperCase();
    /*find matching sound*/
    let soundArr = SOUNDS.filter((sound) => sound.key === drumKey);
    if (soundArr.length > 0) {
      let description = soundArr[0].description;
      /*fbutton hover CSS visual effects*/
      let buttonElement = document.getElementById(description);
      buttonElement.focus();
      /*pass description to parent*/
      this.props.onKeyDown(description);
      /*play audio*/
      let audioElement = document.getElementById(drumKey);
      audioElement.currentTime = 0;
      audioElement.play();
    }
  }

  renderPad(i) {
    let { key, source, description } = SOUNDS[i];
    return (
      <button
        value={key}
        className="drum-pad"
        id={description}
        onClick={this.handleDrumClick}
      >
        {key}
        <audio
          type="audio/wav"
          className="clip"
          src={source}
          id={key}
          preload="auto"
        ></audio>
      </button>
    );
  }

  render() {
    window.addEventListener("keydown", this.handleKeydown);
    return (
      <div className="pad-field">
        {this.renderPad(0)}
        {this.renderPad(1)}
        {this.renderPad(2)}
        {this.renderPad(3)}
        {this.renderPad(4)}
        {this.renderPad(5)}
        {this.renderPad(6)}
        {this.renderPad(7)}
        {this.renderPad(8)}
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <a href="https://www.freepik.com/photos/background">
          Background photo created by kbza - www.freepik.com
        </a>
      </footer>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: "",
    };
    this.handleDrumClick = this.handleDrumClick.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }
  handleDrumClick(displayText) {
    this.setState({
      displayText: displayText,
    });
  }
  handleKeydown(displayText) {
    this.setState({
      displayText: displayText,
    });
  }

  render() {
    return (
      <div id="drum-machine">
        <Display displayText={this.state.displayText} />
        <DrumPad
          onDrumClick={this.handleDrumClick}
          onKeyDown={this.handleKeydown}
        />
        <Footer />
      </div>
    );
  }
}

const SOUNDS = [
  {
    key: "Q",
    source: Tamb,
    description: "Tamb",
  },
  {
    key: "W",
    source: ClHat01,
    description: "ClHat01",
  },
  {
    key: "E",
    source: OpHat,
    description: "OpHat",
  },
  {
    key: "A",
    source: Shkr01,
    description: "Shkr01",
  },
  {
    key: "S",
    source: Shkr02,
    description: "Shkr02",
  },
  {
    key: "D",
    source: Snr01,
    description: "Snr01",
  },
  {
    key: "Z",
    source: Snr02,
    description: "Snr02",
  },
  {
    key: "X",
    source: Kick01,
    description: "Kick01",
  },
  {
    key: "C",
    source: Kick02,
    description: "Kick02",
  },
];

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
