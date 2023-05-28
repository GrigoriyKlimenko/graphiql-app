import { useAuth, IAuthContextValue } from '@/contexts/AuthContext';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AuthButtons = () => {
  const { currentUser, logout } = useAuth() as IAuthContextValue;
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <>
      {!['/login', '/signup'].includes(location.pathname) && currentUser && (
        <div className="d-flex gap-2">
          <Button onClick={() => navigate('/dashboard')}>{t('Profile')}</Button>
          <Button variant="danger" onClick={() => logout()}>
            {t('Log out')}
          </Button>
        </div>
      )}
    </>
  );
};

export default AuthButtons;
