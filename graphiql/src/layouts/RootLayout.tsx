import AuthButtons from '@/components/auth/AuthButtons';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '@/components/footer/footer';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav className="d-flex">
          <AuthButtons />
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
