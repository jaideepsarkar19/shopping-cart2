import Header from "./component/Header";
// import './App.css';
import Navreact from "./component/Navreact";
import Section from "./component/Section";
import react, { useState } from "react";

function App() {
  const [cartItems, setCartitems] = useState();
  const addToCart = (itemId) => {
    console.log("add to cart called", cartItems, itemId);
    setCartitems(itemId);
  };

  return (
    <div className="App">
      <Navreact cartItems={cartItems} />
      <Header />
      <Section addToCart={addToCart} />
    </div>
  );
}

export default App;
