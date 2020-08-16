import React, {Component} from 'react';
import './App.css';
import TotalApp from './components/TotalApp/TotalApp';
import { ThemeProvider, createTheme, Arwes, SoundsProvider, createSounds, Header} from 'arwes';
//import logo from './images/wallpaper.jpg'
import click from './sounds/click.mp3'
import ask from './sounds/ask.mp3'
import deploy from './sounds/deploy.mp3'
import error from './sounds/error.mp3'
import information from './sounds/information.mp3'
//import typing from './sounds/typing.mp3'
import warning from './sounds/warning.mp3'
import glow from './images/glow.png'
import background from './images/background7.jpg'

const sounds = {
  shared: { volume: 1 },
  players: {
      click: { sound: { src: [click] } },
      information: { sound: { src: [information] } },
      ask: { sound: { src: [ask] } },
      warning: { sound: { src: [warning] } },
      error: { sound: { src: [error] } },
      deploy: { sound: { src: [deploy] } },
  },
};

class App extends Component {

  render() {
    return (
      <div>
        <ThemeProvider theme={createTheme()}>
        <Arwes animate show pattern={glow} background={background}>
        <SoundsProvider sounds={createSounds(sounds)}>
          <div style={{ padding: 20 }}>
              <Header animate>
                  <h1 style={{ margin: 0 }} className='fontnew'>Solar Panel Hot Points System Detection</h1>
              </Header>
          </div>
          <TotalApp />
        </SoundsProvider>
        </Arwes>
        </ThemeProvider>
      </div>

    );
  }
}

export default App;

