import React from 'react';

function Cart({ cart }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="list-group">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <span>{item.name}</span>
              <span className="float-right">${item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
