import React, { Component } from 'react';

class ProductItem extends Component {

    constructor(props) {
        super(props);
        console.log('constructor | ' + props.product_name);
    }

    render() {
        const { product_name, price, thumbnail } = this.props;
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} />
                <h5 className="mt-2">Product : {product_name}</h5>
                <p className="title text-right">Price : {price}</p>
                <button className="btn btn-block btn-secondary title">
                    ซื้อ
                </button>
            </div>
        )
    }
}

export default ProductItem;