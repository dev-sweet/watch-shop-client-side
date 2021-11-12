import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Product.css';
const Product = ({ product }) => {
  const { name, _id, price, desc, img } = product;

  const history = useHistory();
  const handleClick = () => {
    const url = `/placeOrder/${_id}`;
    history.push(url);
  };
  return (
    <Col>
      <Card className="product-card">
        <div className="product-img">
          <Card.Img variant="top" src={img} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Card.Text>${price}.00</Card.Text>
          <button onClick={handleClick} className="buy-now mb-3">
            Buy Now
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
