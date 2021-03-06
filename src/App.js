import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Content from './components/layout/Content';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { products: "" };
    console.log(this.state)
  }

  componentDidMount() {
    this.setState({
      products: [
        { product_id: 1, product_name: "Panupong chuaychoo", product_pos: "1", thumbnail: "/images/product/1.jpg", price: 10, product_nname: "besslez" },
        { product_id: 2, product_name: "Niphitphon Thanatkulkit", product_pos: "2", thumbnail: "/images/product/2.JPG", price: 20, product_nname: "nipzbois" },
        { product_id: 3, product_name: "Thakerngsak chuaychoo", product_pos: "3", thumbnail: "/images/product/3.jpg", price: 30, product_nname: "Pete" },
        { product_id: 4, product_name: "Flute Natthanan", product_pos: "4", thumbnail: "/images/product/4.jpg", price: 40, product_nname: "Tiny" },
        { product_id: 5, product_name: "Nattapong Tirapongprasert", product_pos: "5", thumbnail: "/images/product/5.jpg", price: 55, product_nname: "JaKillz" },
      ]
    })
    // console.log(this.state)
  }

  render() {
    return (
      <div>
        <Header />
        <Content products={this.state.products} />
        <Footer company="peem.co.th" email="niphitphon_nt@hotmail.com" />
      </div>
    )
  }

}
export default App;
