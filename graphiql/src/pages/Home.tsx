import { IAuthContextValue, useAuth } from '@/contexts/AuthContext';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { currentUser } = useAuth() as IAuthContextValue;

  const userLinks = (
    <>
      <Link to="/playground">To Playground!</Link>
      <br />
      <Link to="/dashboard">Profile</Link>
    </>
  );

  return (
    <div>
      <div>It is a welcome page</div>
      <div>{currentUser ? userLinks : 'Need authorize an account'}</div>
    </div>
  );
};

export default Home;
