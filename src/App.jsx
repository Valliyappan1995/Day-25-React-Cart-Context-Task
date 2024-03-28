import { CartProvider } from "./Cart";
import CartPage from "./Page";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>E-Shopping Cart</h1>
        <CartPage />
      </div>
    </CartProvider>
  );
}

export default App;
