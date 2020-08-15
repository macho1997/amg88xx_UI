import React, {Component} from 'react';

import { Button, Words, Row, Col} from 'arwes';
import { Icon } from '@iconify/react';
import ReportFrame from '../ReportFrame/ReportFrame';
import PanelImage from '../PanelImage/PanelImage';

import chemicalWeapon from '@iconify/icons-mdi/chemical-weapon';

class TotalApp extends Component {

    constructor(props){
        super(props)
        this.state = {
            serverinput: false,
            port: null,
            time: 10
        }
        this.mainClockControl().bind(this);
    }

    
    // Functions for scheduling requests //
    mainClockControl(){
        const interval = setInterval(() => {
            this.excecutePythonThermalCamera()
        }, 5200);
        return () => clearInterval(interval);
    }

    excecutePythonThermalCamera(){
        const timer = setTimeout(() => {
            console.log("Hola perros")
            this.excecutePythonOpenCV();
        }, 2000);
        return () => {
            clearTimeout(timer);
        }
    }

    excecutePythonOpenCV(){
        const timer2 = setTimeout(() => {
            console.log("Hola perros 2")
            this.fetchRpiData()
        }, 2000);
        return () => {
            clearTimeout(timer2);
        }
    }

    fetchRpiData(){
        const timer3 = setTimeout(() => {
            console.log("Hola perros 3")
            this.requestImgFromChild();
        }, 1000);
        return () => {
            clearTimeout(timer3);
        }
    }

    // --------------------------------------------- //

    requestImgFromChild(){
        //this.refs.changeImg.sendData();
        this.refs.changeImg.clickMe();
        this.accessChild();
    }
    accessChild = () => {
        this.refs.showFrame.onToggle()
    };
    
      /*launchClock() {
        setInterval(()=>{
          this.requestImgFromChild();
        }, 10000)
      }*/
    
    /*callbackFunction(childData){
        this.setState({port: childData})
        //this.refs.showFrame.getPort();
        this.prueba();
    }*/

    handleInputServer = (event) => {
        this.setState({
          port: event.target.value
        })
    }

    render () {
        console.log(this.state.time)
        return (
            <div>
                <Row>
                <Col s={12}>
                    <Row nested noMargin>
                    <Col s={6}>
                    <div style={{ margin: '0 auto', padding: 20, maxWidth: 600 }}>
                        <PanelImage ref="changeImg" portData={this.state.port}/>
                    </div>
                    </Col>
                    <Col s={6}>
                    <ReportFrame ref="showFrame" portData2={this.state.port}/>
                    </Col>
                    </Row>
                </Col>
                </Row>
                <Row>
                <Col s={12}>
                    <Row nested noMargin>
                    <Col s={4} offset={['m5']} >
                        <Button onClick={this.requestImgFromChild.bind(this)} animate layer='success' className='fontnew'>
                            <Icon icon={chemicalWeapon} />
                            {' '}
                            <Words animate layer='success' className='fontnew'>
                            Request Data
                            </Words>
                        </Button>
                    </Col>
                    {/*
                        <Col s={4} offset={['m2']}>
                        <Button animate show onClick={this.requestImgFromChild.bind(this)}>
                        <Words animate layer='primary' className='fontnew'>
                            Request Report
                        </Words>
                        </Button>
                        </Col>
                    */}
                    </Row>
                </Col>
                </Row>
                <form className='fontnew'>
                    <label>
                    <Words animate layer='primary'>
                        Server: 
                    </Words>
                    {' '}
                    <input type="text" onChange={this.handleInputServer.bind(this)}/>
                    </label>
                </form>
            </div>
        );
    }
}
export default TotalApp