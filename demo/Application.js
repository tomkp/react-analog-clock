import './application.scss';

import React from 'react';
import {render} from 'react-dom';
import moment from 'moment';

import Analog from '../src/Analog';


class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment()
        };
    }
    tick() {
        this.setState({
            time: moment()
        });
    }
    componentDidMount() {
        setInterval(() => { this.tick() }, 500); // Call a method on the mixin
    }
    render() {
        return <Analog time={this.state.time} />
    }
}

render(<Timer />, document.getElementById('root'));
