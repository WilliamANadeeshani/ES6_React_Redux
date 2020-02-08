import React, {Component} from 'react';

class Welcome extends Component{
    render() {
        return <h1>Hello {this.props.name}, Welcome to {this.props.yr}</h1>
    }
}

export default Welcome;