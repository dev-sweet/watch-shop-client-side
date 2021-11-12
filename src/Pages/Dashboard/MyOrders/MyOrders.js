import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css';
const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  // cancel order
  const handleCancel = (id) => {
    const confirmation = window.confirm('Arye you sure to cancel this order ?');
    if (confirmation) {
      fetch(`https://stark-reef-55996.herokuapp.com/orders/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('deleted');
        });
    }
  };

  // console.log(orders);
  useEffect(() => {
    fetch(`https://stark-reef-55996.herokuapp.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders, user.email]);
  return (
    <div className="py-3">
      <Container>
        <h2 className="text-center text-md-left">My Orders</h2>
        {orders.map((order) => (
          <div key={order._id} className="d-flex justify-content-center mt-4">
            <div className="single-order shadow">
              <div className="order-img">
                <img src={order.img} alt="" />
              </div>
              <div className="order-details">
                <h5 className="my-3">{order.name}</h5>
                <h6>Order Id : {order._id}</h6>
              </div>
              <h3 className="primary-color">
                <strong>${order.price}</strong>
              </h3>
              <div>
                {order.status === 'pending' ? (
                  <span className="pending">Pending</span>
                ) : (
                  <span className="approved">Approved</span>
                )}
              </div>
              <button
                className="btn btn-danger btn-sm mt-3 mt-lg-0"
                onClick={() => handleCancel(order._id)}
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default MyOrders;
