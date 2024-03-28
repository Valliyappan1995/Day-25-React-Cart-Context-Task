import { useCart } from "./Cart";

const CartPage = () => {
  const { cartItems, updateQuantity, removeItemFromCart } = useCart();

  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, quantity);
  };
  const handleRemoveItem = (productId) => {
    removeItemFromCart(productId);
  };

  return (
    <>
      <h2>E-Cart</h2>
      <div className="cart-container">
        {cartItems.map((item) => (
          <div className="cart-page" key={item.id}>
            <div className="cart-item">
              <div className="item-img">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
              <div className="details">
                <h3>{item.title}</h3>
                <p className="description">{item.description}</p>
                <button onClick={() => handleRemoveItem(item.id)}>
                  REMOVE
                </button>
              </div>
              <div className="qty-select">
                <select
                  className="qty"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                >
                  {[...Array(10).keys()].map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
                <p className="price">${item.price}.00</p>
              </div>
            </div>
            <hr />
            <div className="sub-ship">
              <p className="sub-total">
                SUBTOTAL: <span>${item.price * item.quantity}.00</span>
              </p>
              <p className="shipping">
                SHIPPING: <span>Free</span>
              </p>
            </div>
            <hr />
            <div>
              <b>TOTAL:</b> <span>${item.price * item.quantity}.00</span>
            </div>
            <span className="total-para">Get 3% Back using epay</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartPage;
