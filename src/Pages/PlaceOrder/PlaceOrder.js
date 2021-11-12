import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
const PlaceOrder = () => {
  const [product, setProduct] = useState({});
  const { img, name, desc, price } = product;

  const params = useParams();
  const id = params.id;

  // hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <div className="place-order">
      <Container>
        <Row>
          <Col md={6} sm={12} xs={12}>
            <img className="w-100" src={img} alt="" />
          </Col>
          <Col md={6} sm={12} xs={12}>
            <h2>{name}</h2>
            <h4>${price}.00</h4>
            <p>{desc}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <input defaultValue="test" {...register('example')} />

              {/* include validation with required or other standard HTML validation rules */}
              <input {...register('exampleRequired', { required: true })} />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlaceOrder;
