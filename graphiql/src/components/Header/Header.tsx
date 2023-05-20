import React, { useEffect, useState } from 'react';
import './styles.css';
import AuthButtons from '@components/auth/AuthButtons';

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
      <nav className="d-flex">
        <AuthButtons />
      </nav>
    </div>
  );
};

export default Header;
