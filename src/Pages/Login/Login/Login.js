import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
const Login = () => {
  const { signInWithGoogle, loginUser } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email, data.password, location, history);
  };

  // hanlde google signin
  const handleGoogleSignin = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div className="form-container">
      <div className="login-form">
        <h5 className="form-title">Sign In</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <Link className="d-block text-center my-4 text-dark" to="/register">
            New user ? Register here
          </Link>
          <input className="login-btn" value="SIGN IN" type="submit" />
        </form>
        <button onClick={handleGoogleSignin} className="login-btn google mt-3">
          <i className="fab fa-google me-2"></i> LOGIN WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
