import React, {Component} from 'react';

class EventBinding extends Component{

    constructor(props){
        super(props);
        this.state = {
            msg: "Hello World"
        }
    }

    onClickBye() {
        this.setState({
            msg: "Bye"
        })
    }
    render() {
        return (
            <div>
                <h4>{this.state.msg}</h4>
                <button onClick = {this.onClickBye.bind(this )}>Click</button>
            </div>
        )
    }
}

export default EventBinding;