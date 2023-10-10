import React, { useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
const AddProduct = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch('https://watch-shop-server-side-oznw.vercel.app/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        handleShow();
        reset();
      });
  };
  return (
    <div className="pt-5">
      <Container>
        <div className="review-box">
          <div className="review-form">
            <h2 className="text-secondary text-center">Add A New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="review-input"
                type="text"
                placeholder="Product Name"
                {...register('name', { required: true })}
              />
              {errors.name && (
                <span className="text-danger">Product name is required</span>
              )}
              <input
                className="review-input"
                type="text"
                placeholder="Product Price"
                {...register('price', { required: true })}
              />
              {errors.price && (
                <span className="text-danger">Product price is required.</span>
              )}
              <input
                className="review-input"
                type="text"
                placeholder="image url"
                {...register('img', { required: true })}
              />
              {errors.img && (
                <span className="text-danger">image url is required</span>
              )}
              <textarea
                className="review-input comment"
                placeholder="Description"
                {...register('desc', { required: true })}
              />
              {errors.desc && (
                <span className="text-danger">Description is required</span>
              )}

              <input className="review-btn" value="SUBMIT" type="submit" />
            </form>
          </div>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Congrats ! </Modal.Title>
        </Modal.Header>
        <Modal.Body>Product Added Successfully</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProduct;
