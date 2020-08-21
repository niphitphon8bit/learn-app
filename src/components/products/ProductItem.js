import React, { Component } from 'react';

// export const ProducturntItem = (props) => {
//     const { productName, unitPrice } = props;
//     return (
//         <div>
//             <p>Product : {productName}</p>
//             <p>Price : {unitPrice}</p>
//         </div>
//     )
// }

class ProductItem extends Component {

    constructor(props) {
        super(props);
        console.log('constructor|' + props.productName);
    }

    render() {
        const { productName, unitPrice } = this.props;
        return (
            <div>
                <p>Product : {productName}</p>
                <p>Price : {unitPrice}</p>
            </div>
        )
    }
}

export default ProductItem;