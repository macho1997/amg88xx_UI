import React, {Component} from 'react';
import { Image } from 'arwes';
//import logo from '../../images/wallpaper.jpg'
import axios from 'axios';

class PanelImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            source: null,
            serversource: null,
            port: '',
        };
        //this.sendData();
        this.clickMe = this.clickMe.bind(this);
    }

    componentDidMount(){
        this.setState({ port: this.props.portData });
        axios
            .get(
                `http://${this.props.portData}/requireimage/panelfinal.jpg`,
                { responseType: 'arraybuffer' },
            )
            .then(response => {
                const base64 = btoa(
                new Uint8Array(response.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    '',
                ),
                );
                this.setState({ source: "data:;base64," + base64 });
            });
    }

    clickMe(){
        this.setState({ port: this.props.portData });
        axios
            .get(
                `http://${this.props.portData}/requireimage/panelfinal.jpg`,
                { responseType: 'arraybuffer' },
            )
            .then(response => {
                const base64 = btoa(
                new Uint8Array(response.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    '',
                ),
                );
                this.setState({ source: "data:;base64," + base64 });
            });
    }

    /*handleInput = (event) => {
        this.setState({
          port: event.target.value
        })
        this.sendData();
    }*/

    /*sendData(){
        this.props.parentCallback();
    }*/

    render () {
        return (
            <div>
                <Image animate resources={this.state.source} className='fontnew'>
                    Last requested
                </Image>
            </div>
        );
    }
}
export default PanelImage