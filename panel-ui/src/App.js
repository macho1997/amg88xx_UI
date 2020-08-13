import React, {Component} from 'react';
import './App.css';
import { ThemeProvider, createTheme, Arwes, Button, Words, Line, SoundsProvider, createSounds, Header, Row, Col} from 'arwes';
import { Icon } from '@iconify/react';
import ReportFrame from './components/ReportFrame/ReportFrame';
import PanelImage from './components/PanelImage/PanelImage';

import chemicalWeapon from '@iconify/icons-mdi/chemical-weapon';
//import logo from './images/wallpaper.jpg'
import click from './sounds/click.mp3'
import ask from './sounds/ask.mp3'
import deploy from './sounds/deploy.mp3'
import error from './sounds/error.mp3'
import information from './sounds/information.mp3'
//import typing from './sounds/typing.mp3'
import warning from './sounds/warning.mp3'
import glow from './images/glow.png'
import background from './images/background5.jpg'

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

  accessChild = () => {
    this.refs.showFrame.onToggle()
  };

  requestImgFromChild(){
    this.refs.changeImg.clickMe();
  }

  render() {
    return (
      <ThemeProvider theme={createTheme()}>
      <Arwes animate show pattern={glow} background={background}>
      <SoundsProvider sounds={createSounds(sounds)}>
      <div style={{ padding: 20 }}>
        <Header animate>
            <h1 style={{ margin: 0 }} className='fontnew'>Solar Panels Hot Points System Detection</h1>
        </Header>
      </div>
      <div>
        <Row>
          <Col s={12}>
            <Row nested noMargin>
              <Col s={6}>
              <div style={{ margin: '0 auto', padding: 20, maxWidth: 600 }}>
                <PanelImage ref="changeImg"/>
              </div>
              </Col>
              <Col s={6}>
              <ReportFrame ref="showFrame"/>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Row nested noMargin>
              <Col s={4} offset={['m2']} >
                  <Button onClick={this.requestImgFromChild.bind(this)} animate layer='success' className='fontnew'>
                    <Icon icon={chemicalWeapon} />
                    {' '}
                    <Words animate layer='success' className='fontnew'>
                      Request Image
                    </Words>
                  </Button>
              </Col>
              <Col s={4} offset={['m2']}>
                <Button animate show onClick={this.accessChild}>
                  <Words animate layer='primary' className='fontnew'>
                    Show Report
                  </Words>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Line animate layer='success'/>
      </SoundsProvider>
      </Arwes>
      </ThemeProvider>
    );
  }
}

export default App;

