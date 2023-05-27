import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '@components/Footer/Footer';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
