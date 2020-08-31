import React, { Component } from 'react';
import Calculator from '../products/Calculator';
import ProductList from '../products/ProductList';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = { total_price: 0, orders: [] };
        this.add_order = this.add_order.bind(this);
    }

    add_order(product) {
        console.log(product)
        console.log(this.state.orders)
        let find_order = this.state.orders.find(order => order.product.product_id == product.product_id);
        if (find_order) {
            find_order.quantity++;
        } else {
            this.state.orders.push({ product: product, quantity: 1 })
        }
        const total_price = this.state.total_price + parseInt(product.price);
        console.log(total_price);
        this.setState({ total_price: total_price, orders: this.state.orders })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products} add_order={this.add_order} />
                    </div>
                    <div className="col-md-3">
                        <Calculator total_price={this.state.total_price} orders={this.state.orders} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;