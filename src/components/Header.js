import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount(){
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
        console.log('did mount');
    }

    componentDidUpdate(){
        console.log('did update');
    }

    componentWillUnmount(){
        console.log('will un mount');
        clearInterval(this.timerID);
    }

    tick() {
        // this.state = {date : new Date()};
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div>{this.state.date.toLocaleTimeString()}</div>
        )
    }
}

export default Header;