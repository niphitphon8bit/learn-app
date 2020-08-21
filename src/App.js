import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
import ProductItem from './components/products/ProductItem';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Hello React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <ProductItem productName="Keyboard keycron" unitPrice="4000" />
      <ProductItem productName="Mouse" unitPrice="2000" />
      <Footer company="peem.co.th" email="niphitphon_nt@hotmail.com" />
    </div>
  );
}

export default App;
