import React from 'react';
import Header from '@components/Header/Header';
import './styles.css';
import Ide from '@/components/ide/Ide';

export default function Playground() {
  return (
    <div className="playground">
      <Header />
      <Ide />
    </div>
  );
}
