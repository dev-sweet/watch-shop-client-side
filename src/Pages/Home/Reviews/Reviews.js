import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import './Reviews.css';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://stark-reef-55996.herokuapp.com/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="reviews-container">
      <Container>
        <h1 className="text-center mb-4 rounded rounded-5">Reviews</h1>
        <Row lg={3} md={2} sm={1} xs={1}>
          {reviews.map((review) => (
            <Col key={review._id}>
              <div className="review mt-3 mt-lg-0 shadow text-center p-3">
                <h4>{review.reviewer}</h4>
                <p className="text-dark">{review.email}</p>

                {
                  <Rating
                    initialRating={review.rating}
                    emptySymbol="far fa-star star-color text-warning"
                    fullSymbol="fas fa-star star-color text-warning"
                    readonly
                  />
                }
                <br />
                <span className="text-dark">
                  <span className="text-warning">{review.rating}</span> / 5
                </span>
                <p className="text-dark">{review.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
