import React from 'react';
import { Link } from 'react-router-dom';
import './css/notFound/index.css';

const NotFound = () => {
  return (
    <>
      <div>
        <section className="not-found">
          <div className="container not-found__container">
            <h1 className="not-found__title">Not found page</h1>
            <p className="not-found__number">404</p>
            <p className="not-found__text">Sorry! Page is not found.</p>
            <Link to="/">GO HOME</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotFound;
