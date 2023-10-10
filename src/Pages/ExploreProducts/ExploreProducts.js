import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Product from '../Shared/Product/Product';
import Spinner from '../Shared/Spinner/Spinner';
import './ExploreProducts.css';
const ExploreProducts = () => {
  const [products, setProducts] = useState([]);
  const { isLoading } = useAuth();
  useEffect(() => {
    fetch('https://watch-shop-server-side-oznw.vercel.app/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <Header />
      <div className="py-5">
        <Container>
          <h2 className="products-title">
            OUR <span>EXCLUSIVE</span> PRODUCTS
          </h2>
          {products ? (
            <Row className="g-4" lg={3} md={2} sm={1} xs={1}>
              {products.map((product) => (
                <Product product={product} key={product._id} />
              ))}
            </Row>
          ) : (
            <Spinner />
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ExploreProducts;
