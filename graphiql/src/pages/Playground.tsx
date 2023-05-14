import React from 'react';
import { Link } from 'react-router-dom';

export default function Playground() {
  return (
    <>
      <div>Playground</div>
      <br />
      <Link to="/dashboard">Profile</Link>
    </>
  );
}
