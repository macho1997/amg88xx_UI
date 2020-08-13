import React, {Component} from 'react';
import './ReportFrame.css';
import { Project, Words } from 'arwes';
import axios from 'axios';

class ReportFrame extends Component {
    constructor (props) {
        super(props);
        this.state = {
            show: false,
            panelstate: null,
            temperature: null
         };
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
                this.setState({ panelstate: statusdata.state, temperature:statusdata.temperature });
            });
    }
    render () {
        return (
            <div style={{ padding: '20px', height: '400px' }}>
                <Project
                animate
                show={this.state.show}
                header='LAST REPORT'
                className='fontnew'
            >
                {anim => (
                    <p><Words animate show={anim.entered}>
                        Panel state:
                    </Words></p>
                )}
            </Project>
            </div>
        );
    }
    onToggle () {
        this.setState({ show: !this.state.show });
        this.updateStatus();
    }
}
export default ReportFrame