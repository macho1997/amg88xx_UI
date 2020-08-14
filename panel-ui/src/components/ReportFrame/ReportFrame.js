import React, {Component} from 'react';
import './ReportFrame.css';
import { Project } from 'arwes';
import axios from 'axios';
import RpiReport from '../RpiReport/RpiReport';

class ReportFrame extends Component {
    constructor (props) {
        super(props);
        this.state = {
            show: true,
            panelstate: null,
            temperature: null
         };
    }

    componentDidMount (){
        axios
            .get(
                'http://localhost:3000/getstatus',
                { responseType: 'json' },
            )
            .then(response => {
                let statusdata = response.data;
                console.log(statusdata)
                this.setState({ panelstate: statusdata.status, temperature:statusdata.temperature });
            });
    }

    updateStatus (){
        axios
            .get(
                'http://localhost:3000/getstatus',
                { responseType: 'json' },
            )
            .then(response => {
                let statusdata = response.data;
                console.log(statusdata)
                this.setState({ panelstate: statusdata.status, temperature:statusdata.temperature });
            });
    }

    render () {
        let panelState = this.state;
        return (
            
            <div style={{ padding: '20px', height: '400px' }}>
                
                <Project
                animate
                show={this.state.show}
                header='LAST REPORT'
                className='fontnew'
                >
                    <RpiReport ref="showFrame" panelData={panelState}/>
                </Project>
            </div>
        );
    }
    onToggle () {
        this.updateStatus();
        this.accessChild();
    }
    accessChild = () => {
        this.refs.showFrame.hitThis()
    };
}
export default ReportFrame