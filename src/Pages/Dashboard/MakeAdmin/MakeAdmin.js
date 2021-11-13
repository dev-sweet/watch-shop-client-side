import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './MakeAdmin.css';
const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          handleShow();
        }
      });
  };
  return (
    <div className="py-5">
      <h2 className="text-center text-secondary">Make an Admin</h2>
      <form onSubmit={handleSubmit} className="admin-form mx-auto">
        <input
          onChange={handleChange}
          className="review-input"
          type="email"
          placeholder="Email"
        />
        <input className="review-btn w-50" value="SUBMIT" type="submit" />
      </form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Success </Modal.Title>
        </Modal.Header>
        <Modal.Body>Make Admin Successfuly</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MakeAdmin;
