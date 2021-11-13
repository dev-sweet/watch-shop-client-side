import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  // delete product by onclick handler
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure want to delete ?');
    if (proceed) {
      fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => console.log('deleted'));
    }
  };
  useEffect(() => {
    fetch('https://stark-reef-55996.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <div className="py-5">
      <Container>
        <h1 className="text-center text-warning my-3">Manage Products</h1>
        <Row className="g-4" lg={2} md={1} sm={1} xs={1}>
          {products.map((product) => (
            <Col>
              <Card>
                <Card.Header className="text-center">
                  {product.name}
                </Card.Header>
                <Card.Body className="p-3">
                  <div className="text-center pt-2 pb-3">
                    <img
                      className="w-50 rounded-circle"
                      src={product.img}
                      alt=""
                    />
                  </div>
                  <Card.Text className="text-dark text-center">
                    {product.desc}
                  </Card.Text>

                  <Card.Title className="text-dark text-center">
                    ${product.price}.00
                  </Card.Title>
                  <div className="text-center py-3">
                    <Button
                      onClick={() => handleDelete(product._id)}
                      className="mx-auto"
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageProducts;
