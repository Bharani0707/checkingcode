import React, { useState } from 'react';

function AddProduct({ addProduct }) {
  const [product, setProduct] = useState({ id: '', name: '', price: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ id: '', name: '', price: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label>ID</label>
        <input type="text" name="id" value={product.id} onChange={handleChange} className="form-control" required />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} className="form-control" required />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} className="form-control" required />
      </div>
      <div className="form-group">
        <label>Image URL</label>
        <input type="text" name="image" value={product.image} onChange={handleChange} className="form-control" required />
      </div>
      <button type="submit" className="btn btn-success">Add Product</button>
    </form>
  );
}

export default AddProduct;
