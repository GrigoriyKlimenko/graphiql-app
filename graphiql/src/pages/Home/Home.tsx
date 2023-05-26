import { IAuthContextValue, useAuth } from '@/contexts/AuthContext';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.css';
import LanguageSwitcher from '@components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { currentUser } = useAuth() as IAuthContextValue;
  const { t } = useTranslation();

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
          <div className="welcome__control">
            <LanguageSwitcher />
            <div className={currentUser ? 'welcome__buttons hidden' : 'welcome__buttons'}>
              <NavLink className="button" to="/login">
                {t('Log in')}
              </NavLink>
              <NavLink className="button" to="/signup">
                {t('Sign up')}
              </NavLink>
            </div>
          </div>
          <div className="welcome__content">
            <div className="welcome__info">
              <h1 className="welcome__title">
                {t('The project')} <span>&ldquo;GraphiQL&rdquo;</span>
              </h1>
              <p className="welcome__description">
                {t('GraphiQL is a playground/IDE for graphQL requests.')}
              </p>
              <div className="welcome__message-block">
                {currentUser ? (
                  <div className="welcome__buttons">
                    <NavLink className="button" to="/playground">
                      {t('To Playground')}
                    </NavLink>
                    <NavLink className="button" to="/dashboard">
                      {t('Profile')}
                    </NavLink>
                  </div>
                ) : (
                  <p className="message-block__text">{t('Need authorize an account')}</p>
                )}
              </div>
              <p className="welcome__course">
                {t('RS School Course')}: <span>&ldquo;React&rdquo;</span>
              </p>
              <div className="welcome__team">
                <p className="team__text">{t('Our team')}:</p>
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
