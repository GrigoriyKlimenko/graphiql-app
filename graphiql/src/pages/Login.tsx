import React, { useEffect, useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { IAuthContextValue, useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '@/layouts/AuthLayout';
import LanguageSwitcher from '@components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { signIn, currentUser } = useAuth() as IAuthContextValue;
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (currentUser) {
      navigate('/playground');
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await signIn(emailRef.current?.value as string, passwordRef.current?.value as string);
      navigate('/playground');
    } catch {
      setError(t('Failed to log in.'));
    }
    setLoading(false);
  };

  return (
    <AuthLayout>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">{t('Log In')}</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>{t('Email')}</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>{t('Password')}</Form.Label>
              <Form.Control type="password" required ref={passwordRef} />
            </Form.Group>
            <Button disabled={loading} type="submit" className="w-100 mt-3">
              {t('Log in')}
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        {t('Need an account?')} <Link to="/signup">{t('Sign Up')}</Link>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <LanguageSwitcher />
      </div>
    </AuthLayout>
  );
};

export default Login;
