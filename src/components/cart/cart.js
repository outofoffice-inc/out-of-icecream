import './style.css';

function Cart() {
  return (
    <div className="cart">
      <div className='cart-content'>
        <div className="cart-icon" />
        <div className="count-and-price">
          <div className="count">
            0 Item(s)
          </div>
          <div className="price">
            $12.50
          </div>
        </div>
        <div className="checkout-btn">
          <span>Checkout</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
