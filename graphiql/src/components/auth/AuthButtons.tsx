import { useAuth, IAuthContextValue } from '@/contexts/AuthContext';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthButtons = () => {
  const { currentUser, logout } = useAuth() as IAuthContextValue;
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {!['/login', '/signup'].includes(location.pathname) && currentUser && (
        <div className="d-flex gap-2">
          <Button onClick={() => navigate('/dashboard')}>Profile</Button>
          <Button variant="danger" onClick={() => logout()}>
            Log out
          </Button>
        </div>
      )}
    </>
  );
};

export default AuthButtons;
