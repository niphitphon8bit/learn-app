import React, { Component } from 'react';

class ProductItem extends Component {

    constructor(props) {
        super(props);
        console.log('constructor | ' + props.product_name);
    }

    render() {
        const { product_name, price, thumbnail, product_nname, product_pos } = this.props;
        const name = product_name.replace(" ", ` "${product_nname}" `)
        return (
            <div className="col-md-3 col-sm-6 ">
                <br />
                <div className="d-flex justify-content-center">
                    <img className="img-fluid img-thumbnail" src={thumbnail} />
                </div>
                <h6 className="mt-2 fontsize">{name}</h6>
                <h6 className="mt-2 fontsize">Position : {product_pos}</h6>
                <p className="title text-right">Price : {price}</p>
                <button className="btn btn-block btn-secondary title">
                    ซื้อ
                </button>
                <hr className="new1" />
            </div>
        )
    }
}

export default ProductItem;