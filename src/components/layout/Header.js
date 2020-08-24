import React, { Component } from 'react';
import Logo from "../../images/logo/logo.png";
class Header extends Component {

    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
        console.log('did mount');
    }

    componentDidUpdate() {
        console.log('did update');
    }

    componentWillUnmount() {
        console.log('will un mount');
        clearInterval(this.timerID);
    }

    tick() {
        // this.state = {date : new Date()};
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light rounded-bottom " style={{ backgroundColor: '#2b2b2b' }}>
                <h3 className="text-success"><img width="75" height="40" src={Logo} alt="images" /></h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col-md-2 text-warning text-uppercase">
                  <h6>aloha 8bit</h6>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item active">
                            <a className="nav-link text-muted" href="#">ABOUT <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#">TEAM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                </div>
                <div className="col-md-2 text-right" style={{ color: "white" }}>
                    {this.state.date.toLocaleTimeString()}
                </div>
            </nav>
        )
    }
}

export default Header;