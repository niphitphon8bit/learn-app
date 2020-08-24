import React, { Component } from 'react';

class Calculator extends Component {

    render() {
        return (
            <div>
                <h1 className="text-right">340.0</h1>
                <hr />
                <ul className="list-unstyled">
                    <li className="text-right text-success title">บิงซู 1 = 200</li>
                    <li className="text-right text-success title">บูซิง 2 = 100</li>
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title"> ยืนยัน </button>
                <button className="btn btn-block btn-secondary title"> ยกเลิก </button>
            </div >
        )
    }

}

export default Calculator;