import { useEffect, useState } from 'react';
import './styles.css';

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
      <h2 className="header-text">GraphiQL</h2>
    </div>
  );
};

export default Header;
