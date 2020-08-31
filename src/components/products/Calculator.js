import React, { Component } from 'react';

class Calculator extends Component {

    show_order(orders) {
        if (!orders || orders.length > 0) {
            return orders.map(order => {
                return (<li className="text-right text-success title">
                    {order.product.product_name} x {order.quantity} = {order.product.price * order.quantity}
                    < button className="text-right text-success title" >x</ button >
                </li>)
            });
        } else {
            return <li className="text-right text-muted title">ไม่มีค่ะ</li>
        }
    }

    render() {
        const { total_price, orders } = this.props;
        return (
            <div>
                <h1 className="text-right">{total_price}</h1>
                <hr />
                <ul className="list-unstyled">
                    {this.show_order(orders)}
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title"> ยืนยัน </button>
                <button className="btn btn-block btn-secondary title"> ยกเลิก </button>
            </div >
        )
    }

}

export default Calculator;