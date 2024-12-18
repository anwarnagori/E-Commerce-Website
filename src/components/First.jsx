import React, { useState, useEffect } from 'react';

function First() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>Error fetching data: {error.message}</h2>;

  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} width="100" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Price: </strong>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default First;