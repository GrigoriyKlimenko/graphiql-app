import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <select
        className="lng-select form-select"
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
