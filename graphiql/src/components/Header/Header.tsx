import React, { useEffect, useState } from 'react';
import './styles.css';
import AuthButtons from '@components/auth/AuthButtons';
import LanguageSwitcher from '@components/LanguageSwitcher/LanguageSwitcher';

const Header = () => {
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
      <h2>GraphiQL</h2>
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
