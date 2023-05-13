import React from 'react';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div>
      <LanguageSwitcher />
      {t('helloworld')}
    </div>
  );
}

export default App;
