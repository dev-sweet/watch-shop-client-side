import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../../Shared/Product/Product';
import './Products.css';
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://watch-shop-server-side-oznw.vercel.app/products?limit=6')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="products-container">
      <Container>
        <h2 className="products-title">
          <span>FEATURED</span> PRODUCTS
        </h2>
        <Row className="g-4" lg={3} md={2} sm={1} xs={1}>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
