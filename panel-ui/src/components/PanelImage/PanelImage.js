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
            port: 'localhost:3000',
        };
    
        this.clickMe = this.clickMe.bind(this);
    }

    componentDidMount(){
        axios
            .get(
                `http://${this.state.port}/requireimage/interstellar1.jpg`,
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
        axios
            .get(
                `http://${this.state.port}/requireimage/interstellar1.jpg`,
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

    handleInput = (event) => {
        this.setState({
          port: event.target.value
        })
    }

    render () {
        return (
            <div>
                <Image animate resources={this.state.source} className='fontnew'>
                    Last requested
                </Image>
                <form className='fontnew'>
                    <label>
                      Server: 
                      <input type="text" value={this.state.port} onChange={this.handleInput}/>
                    </label>
                  </form>
            </div>
        );
    }
}
export default PanelImage