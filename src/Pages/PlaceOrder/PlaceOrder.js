import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const { img, name, desc, price } = product;
  const { user } = useAuth();
  const params = useParams();
  const id = params.id;

  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // post order information on submittin the form
  const onSubmit = (data) => {
    const orderInfo = {
      ...data,
      name,
      price,
      img,
      status: 'pending',
    };
    fetch('https://stark-reef-55996.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setShow(true);
          reset();
        }
      });
  };

  // get product information by product id
  useEffect(() => {
    fetch(`https://stark-reef-55996.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <>
      <Header />
      <div className="place-order">
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12} xs={12}>
              <div className="d-flex align-items-center h-100">
                <img className="w-100" src={img} alt="" />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} xs={12}>
              <div className="order-content mt-4 mt-lg-0">
                <div>
                  <h2 className="mb-3">{name}</h2>
                  <h4 className="font-weight-bold">${price}.00</h4>
                  <p className="text-dark">{desc}</p>

                  {/* order form */}
                  <form className="py-3" onSubmit={handleSubmit(onSubmit)}>
                    <input
                      className="order-input"
                      type="text"
                      defaultValue={user.displayName}
                      placeholder="Your Name"
                      {...register('userName', { required: true })}
                    />
                    {errors.email && (
                      <span className="text-danger">Name is required !</span>
                    )}
                    <input
                      className="order-input"
                      type="email"
                      defaultValue={user.email}
                      placeholder="Email"
                      {...register('email', { required: true })}
                    />
                    {errors.email && (
                      <span className="text-danger">Email is required !</span>
                    )}
                    <input
                      className="order-input"
                      type="text"
                      placeholder="Phone"
                      {...register('phone', { required: true })}
                    />
                    {errors.phone && (
                      <span className="text-danger">Phone is required !</span>
                    )}
                    <input
                      className="order-input"
                      type="text"
                      placeholder="Address"
                      {...register('address', { required: true })}
                    />
                    {errors.address && (
                      <span className="text-danger">Address is required !</span>
                    )}
                    <input
                      className="order-btn"
                      value="PLACE ORDER"
                      type="submit"
                    />
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations </Modal.Title>
        </Modal.Header>
        <Modal.Body>Your order is successfully placed</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PlaceOrder;
