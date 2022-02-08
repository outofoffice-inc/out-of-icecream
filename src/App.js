import React from 'react';

import Cart from './components/cart/cart';
import IceCream from './components/ice-cream/ice-cream';
import Sort from './components/sort/sort';

import FLAVORS_DATA from './flavors';

import './App.css';

function App() {
  return (
    <div id="out-of-icecream">
      <header id="header">
        <div className="content">
          <section className="logo">
            <h1>Out of Ice Cream</h1>
          </section>
          <section className="checkout">
            <Cart />
          </section>
        </div>
      </header>
      <main id="flavors">
        <div className="content">
          <nav className="options">
            <h2>Flavors</h2>
            <Sort />
          </nav>
        </div>
        <div className="content">          
          <section className="list">
            <IceCream />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
