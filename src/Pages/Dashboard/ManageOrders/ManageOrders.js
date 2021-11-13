import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  // change shipping status
  const handleStatus = (id) => {
    fetch(`https://stark-reef-55996.herokuapp.com/orders/${id}`, {
      method: 'PUT',
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // delete order by clicking delete button
  const handleDelete = (id) => {
    const confirmation = window.confirm('Arye you sure to delete this order ?');
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
  useEffect(() => {
    fetch('https://stark-reef-55996.herokuapp.com/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  return (
    <div className="py-5">
      <Container>
        <h1 className="text-warning text-center mb-4">Manage Orders</h1>

        <Table className="shadow" hover responsive="md">
          <thead className="table-head">
            <tr className="table-dark text-center">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Order</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.userName}</td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td style={{ fontSize: '13px' }}>{order.name}</td>
                <th>
                  {order.status === 'pending' ? (
                    <span className="text-danger">Pending</span>
                  ) : (
                    <span className="text-success">Shipped</span>
                  )}
                </th>
                <td>
                  {order.status === 'pending' ? (
                    <button
                      onClick={() => handleStatus(order._id)}
                      className="btn btn-primary btn-sm"
                    >
                      Shipped
                    </button>
                  ) : (
                    <button className="btn btn-success btn-sm disabled">
                      Shipped
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-danger btn-sm ms-3 mt-2 mt-md-0"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ManageOrders;
