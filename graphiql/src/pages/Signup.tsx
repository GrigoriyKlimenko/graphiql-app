import React, { useEffect, useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { IAuthContextValue, useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '@/layouts/AuthLayout';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@components/LanguageSwitcher/LanguageSwitcher';

const Signup = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const { signup, currentUser } = useAuth() as IAuthContextValue;
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

    if (
      !passwordRef.current?.value.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      )
    ) {
      return setError(
        t(
          'Password should contain minimum 8 symbols, at least one letter, one digit, one special character.'
        )
      );
    }

    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError(t('Passwords do not match.'));
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current?.value as string, passwordRef.current?.value as string);
      navigate('/playground');
    } catch {
      setError(t('Failed to create an account.'));
    }
    setLoading(false);
  };

  return (
    <AuthLayout>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">{t('Sign Up')}</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>{t('Password Confirmation')}</Form.Label>
              <Form.Control type="password" required ref={passwordConfirmRef} />
            </Form.Group>
            <Button disabled={loading} type="submit" className="w-100 mt-3">
              {t('Sign up')}
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        {t('Already have an account?')} <Link to="/login">{t('Log in')}</Link>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <LanguageSwitcher />
      </div>
    </AuthLayout>
  );
};

export default Signup;
