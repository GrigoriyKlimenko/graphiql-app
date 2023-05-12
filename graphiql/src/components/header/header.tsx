import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <nav className="header__navigation">
          <ul className="navigation">
            <li className="navigation__item">
              <NavLink to="/">Welcome</NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/graphiql">Graphiql</NavLink>
            </li>
          </ul>
          <div className="header__buttons">
            <NavLink className="button" to="/sign-in">
              Sign In
            </NavLink>
            <NavLink className="button" to="/sign-up">
              Sign Up
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
