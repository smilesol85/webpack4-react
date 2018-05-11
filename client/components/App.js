import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.data.text
        }
    }

    componentDidMount() {
        this.setState({
            text: 'Hello React-SSR ! Client Loaded'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
            </div>
        );
    }
}

export default App