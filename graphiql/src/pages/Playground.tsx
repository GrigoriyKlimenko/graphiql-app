import React from 'react';
import { Link } from 'react-router-dom';
import './css/playground/index.css';
import Ide from '@/components/Ide';

export default function Playground() {
  return (
    <div>
      <div>Playground</div>
      <Ide />
      <br />
      <Link to="/dashboard">Profile</Link>
    </div>
  );
}
