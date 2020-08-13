import React, {Component} from 'react';
import './ReportFrame.css';
import { Project, Words } from 'arwes';

class ReportFrame extends Component {
    constructor () {
        super(...arguments);
        this.state = {
            show: true
         };
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
                        Dirty panel
                    </Words></p>
                )}
            </Project>
            </div>
        );
    }
    onToggle () {
        this.setState({ show: !this.state.show });
    }
}
export default ReportFrame