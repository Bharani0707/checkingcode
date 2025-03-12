import React from 'react';
import './ViewProduct.css';

function ViewProduct({ products, addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ViewProduct;
