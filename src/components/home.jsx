import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const user = useSelector((state) => state.user.user);

  return (
    <div style={{backgroundImage:`url(/img1.jpeg)`,backgroundSize:'cover',height:'800px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'10px'}}>
      <h2>WELCOME, {user}!</h2>
      <p>This Is Your Home Page.</p>
      <button onClick={logout} style={{backgroundColor:'green'}}>LOGOUT</button>
    </div>
  );
};

export default Home;
