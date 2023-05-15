import AuthButtons from '@/components/auth/AuthButtons';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav className="d-flex">
          <h1>GraphiQl</h1>
          <AuthButtons />
        </nav>
      </header>
      <main className="d-flex " style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
      <footer className="footer">footer is displayed on all pages of the application</footer>
    </div>
  );
}
