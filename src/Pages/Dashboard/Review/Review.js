import React, { useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './Review.css';
const Review = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    const review = {
      ...data,
      reviewer: user.displayName,
      email: user.email,
    };

    fetch('https://watch-shop-server-side-oznw.vercel.app/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        handleShow();
        reset();
      });
  };
  return (
    <div className="review-container">
      <Container>
        <div className="review-box">
          <div className="review-form">
            <h2 className="text-secondary text-center">Review Us</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                className="review-input comment"
                placeholder="Comment.."
                {...register('description', { required: true })}
              />
              {errors.description && (
                <span className="text-danger">Please describe about us.</span>
              )}
              <input
                className="review-input"
                type="number"
                placeholder="Rating (1-5)"
                {...register('rating', { required: true })}
              />
              {errors.rating && (
                <span className="text-danger">Please rating (1-5)</span>
              )}
              <input className="review-btn" value="SUBMIT" type="submit" />
            </form>
          </div>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submitted Successfully </Modal.Title>
        </Modal.Header>
        <Modal.Body>Thanks for your response.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Review;
