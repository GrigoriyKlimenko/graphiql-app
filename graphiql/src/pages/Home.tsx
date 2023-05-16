import { IAuthContextValue, useAuth } from '@/contexts/AuthContext';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './css/home/index.css';

const Home = () => {
  const { currentUser } = useAuth() as IAuthContextValue;

  //   const userLinks = (
  //     <>
  //       <Link to="/playground">To Playground!</Link>
  //       <br />
  //       <Link to="/dashboard">Profile</Link>
  //     </>
  //   );

  return (
    <div>
      <section className="welcome">
        <div className="welcome__container container">
          <div className={currentUser ? 'welcome__buttons hidden' : 'welcome__buttons'}>
            <NavLink className="button" to="/login">
              Sign in
            </NavLink>
            <NavLink className="button" to="/signup">
              Sign up
            </NavLink>
          </div>
          <div className="welcome__content">
            <div className="welcome__info">
              <h1 className="welcome__title">
                The project <span>"GraphiQL"</span>
              </h1>
              <p className="welcome__description">
                GraphiQL is a playground/IDE for graphQL requests.
              </p>

              <p className="welcome__course">
                RS School Course: <span>"React"</span>
              </p>
              <div className="welcome__message-block">
                {currentUser ? (
                  <div className="welcome__buttons">
                    <NavLink className="button" to="/playground">
                      To Playground
                    </NavLink>
                    <NavLink className="button" to="/dashboard">
                      Profile
                    </NavLink>
                  </div>
                ) : (
                  <p className="message-block__text">Need authorize an account</p>
                )}
              </div>
              <div className="welcome__team">
                <p className="team__text">Our team:</p>
                <ul className="team-list">
                  <li className="team-list__item">Grigoriy Klimenko</li>
                  <li className="team-list__item">Ilya Vylegzhanin</li>
                  <li className="team-list__item">Pshihotskaya Tatsiana</li>
                </ul>
              </div>
            </div>
            <div className="welcome__image">
              <div className="welcome-image">
                <span className="icon icon_graphiql"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
