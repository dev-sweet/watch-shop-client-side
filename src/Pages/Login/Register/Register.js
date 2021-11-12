import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Register = () => {
  const { registerUser, signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    registerUser(data.email, data.password, data.name, history);
  };

  // handle google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div className="form-container">
      <div className="login-form">
        <h5 className="form-title">Please Register</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="login-input"
            placeholder="Your Name"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <span className="text-danger">Name is required !</span>
          )}
          <input
            className="login-input"
            type="email"
            placeholder="Your Email"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-danger">Email is required !</span>
          )}
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span className="text-danger">Password is required !</span>
          )}
          <Link className="d-block text-center my-4 text-dark" to="/login">
            Already Registered ? Please Signin
          </Link>
          <input className="login-btn" value="REGISTER" type="submit" />
        </form>
        <button onClick={handleGoogleSignIn} className="login-btn google mt-3">
          <i className="fab fa-google me-2"></i> CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Register;
