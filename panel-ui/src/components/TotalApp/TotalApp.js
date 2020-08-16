import React, {Component} from 'react';

import { Button, Words, Row, Col} from 'arwes';
import { Icon } from '@iconify/react';
import ReportFrame from '../ReportFrame/ReportFrame';
import PanelImage from '../PanelImage/PanelImage';

import chemicalWeapon from '@iconify/icons-mdi/chemical-weapon';
import mdiRobot from '@iconify/icons-mdi/robot';
import axios from 'axios';

class TotalApp extends Component {

    constructor(props){
        super(props)
        this.state = {
            serverinput: false,
            port: null,
            time: 10,
            autocontrol: false,
            controlState: "Manual"
        }
        //this.mainClockControl().bind(this);
    }

    
    // Functions for scheduling requests //
    mainClockControl(){
        if(!this.state.port){
            alert("Server input empty. Please enter a server ip and port")
            return
        }
        this.setState({
            autocontrol: true,
            controlState: "Automatic"
        })
        this.interval = setInterval(() => {
            this.excecutePythonThermalCamera()
        }, 4000);
    }

    excecutePythonThermalCamera(){
        axios
            .get(
                `http://${this.state.port}/excecutethermalcam`
            )
            .then(response => {
                let statusdata = response.data;
                console.log(statusdata)
            });

        this.excecutePythonOpenCV();
    }

    excecutePythonOpenCV(){
        const timer2 = setTimeout(() => {
            axios
            .get(
                `http://${this.state.port}/excecuteopencv`
            )
            .then(response => {
                let statusdata = response.data;
                console.log(statusdata)
            });
            this.fetchRpiData()
        }, 2000);
        return () => {
            clearTimeout(timer2);
        }
    }

    fetchRpiData(){
        const timer3 = setTimeout(() => {
            console.log(`Puerto: ${this.state.port}`)
            this.requestImgFromChild();
        }, 2000);
        return () => {
            clearTimeout(timer3);
        }
    }

    stopSystemClock(){
        if (!this.state.autocontrol){
            alert("Cannot stop uninitialized automatic process");
            return
        }
        this.setState({
            autocontrol: false,
            controlState: "Manual"
        })
        clearInterval(this.interval)
    }

    // --------------------------------------------- //

    // --------------   Requests   ----------------- //

    

    // --------------------------------------------- //

    requestImgFromChild(){
        if(!this.state.port){
            alert("Server input empty. Please enter a server ip and port")
            return
        }
        //this.refs.changeImg.sendData();
        this.refs.changeImg.clickMe();
        this.accessChild();
    }
    accessChild = () => {
        this.refs.showFrame.onToggle()
    };

    handleInputServer = (event) => {
        this.setState({
          port: event.target.value
        })
    }

    render () {
        var controlStatus = this.state.controlState;
        return (
            <div>
                <Row>
                <Col s={10}>
                    <Words animate layer='success' className='fontnew'> Control: </Words> <p className='fontnew'>{controlStatus}</p>
                </Col>
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
                    <Col s={4} offset={['m2']} >
                        <Button onClick={this.excecutePythonThermalCamera.bind(this)} animate className='fontnew'>
                            <Icon icon={chemicalWeapon} />
                            {' '}
                            <Words animate className='fontnew'>
                            Request Data
                            </Words>
                        </Button>
                    </Col>
                    <Col s={2} offset={['m1']}>
                        <Button onClick={this.mainClockControl.bind(this)} animate layer='success' className='fontnew'>
                            <Icon icon={chemicalWeapon} />
                            {' '}
                            <Words animate layer='success' className='fontnew'>
                            Start Automatic Control
                            </Words>
                        </Button>
                    </Col>
                    <Col s={2} >
                        <Button onClick={this.stopSystemClock.bind(this)} animate layer='alert' className='fontnew'>
                            <Icon icon={mdiRobot} />
                            {' '}
                            <Words animate layer='alert' className='fontnew'>
                            Stop Automatic Control
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
                    <Row>
                        <Col s={6} offset={['m4']}>
                            <form className='fontnew'>
                                <label>
                                <Words animate layer='primary'>
                                    Server: 
                                </Words>
                                {' '}
                                <input type="text" onChange={this.handleInputServer.bind(this)}/>
                                </label>
                            </form>
                        </Col>
                    </Row>
                </Col>
                </Row>
                
            </div>
        );
    }
}
export default TotalApp