import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const handleLangChange = (e) => {
    localStorage.setItem('currentLanguage', e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div>
      <select className="lng-select form-select" value={i18n.language} onChange={handleLangChange}>
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
