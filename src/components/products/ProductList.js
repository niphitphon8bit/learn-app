import React, { Component } from 'react';
import ProductItem from './ProductItem';
class ProductList extends Component {

    showProduct() {
        return this.props.products && this.props.products.map(product => (
            <ProductItem key={product.product_id} {...product} />
        ))
    }

    render() {
        return (
            <div>
                {this.showProduct()}
            </div>
        )
    }

}

export default ProductList;