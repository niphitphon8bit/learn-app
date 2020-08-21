import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>{this.state.date.toLocaleDateString()}</div>
        )
    }
}

export default Header;