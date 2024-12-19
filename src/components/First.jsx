import React, { useState, useEffect } from "react";

function First() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>Error fetching data: {error.message}</h2>;

  return (
    <div className="first">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.images[0]} alt={product.image} width="100" />
            <h3>{product.brand}</h3>
            {/* <h3>{product.category}</h3> */}
            {/* <p>{product.description}</p> */}
            <p>
              <strong>Price: </strong>${product.price}
            </p>
            <button>Add to card</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default First;
