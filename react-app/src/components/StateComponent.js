import React, {Component} from 'react';

class ComponentState extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayText: "Welcome to Chanel."
        };
    }

    changeMessage() {
        this.setState({
            displayText:  "Thank You"
        });
    }

    render() {
        return (
            <div>
                <h1> {this.state.displayText} </h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default ComponentState;