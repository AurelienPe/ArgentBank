import "./login.css"

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions';

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    try {
      dispatch(login({ email, password, rememberMe }));
      console.log("sumbited :", email, password, rememberMe)
      setTimeout(() => {
        navigate('/profile');
      }, 500)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main class="login bg-dark">
      <section class="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div class="input-wrapper">
            <label for="email">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
          </div>

          <div class="input-wrapper">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className='form-check'>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label>Remember Me</label>
          </div>
          <button type="submit" class="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  )
}

export default Login;
