import React, {Component} from 'react';

class RpiReport extends Component {
    constructor (props) {
        super(props);
        this.state = {
            panelstate: this.props.state,
            temperature: this.props.temperature
         };
    }
    render () {
        return (
            <div style={{ padding: '20px', height: '200px' }}>
                <p>Panel State: {this.props.panelData.panelstate}</p>
                <p>Panel Temperature: {this.props.panelData.temperature}</p>
            </div>
        );
    }
    hitThis () {
        
    }
}
export default RpiReport