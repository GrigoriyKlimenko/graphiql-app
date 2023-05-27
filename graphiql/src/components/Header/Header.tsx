import React, { useEffect, useState } from 'react';
import './styles.css';
import AuthButtons from '@components/auth/AuthButtons';
import LanguageSwitcher from '@components/LanguageSwitcher/LanguageSwitcher';
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const handleScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 80) {
      setIsPageScrolled(true);
    } else {
      setIsPageScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className={`header ${isPageScrolled ? 'sticky' : ''}`}>
      <h2 onClick={() => navigate('/')} className="header-title">
        GraphiQL
      </h2>
      <div className="header-control">
        <LanguageSwitcher />
        <nav className="d-flex">
          <AuthButtons />
        </nav>
      </div>
    </div>
  );
};

export default Header;
