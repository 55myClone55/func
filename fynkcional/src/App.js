

import Header from './components/Header';
import Main from './components/Main';
import Backet from './components/Basket';
import data from './components/data';
import { useState } from 'react';

function App() {
  const { products } = data;
  const [cartItems, setCarItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCarItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCarItems([...cartItems, { ...product, qty: 1 }]);
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCarItems(cartItems.filter((x) =>
        x.id !== product.id));
    } else {
      setCarItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Backet onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Backet>
      </div>
    </div>
  );
}

export default App;
