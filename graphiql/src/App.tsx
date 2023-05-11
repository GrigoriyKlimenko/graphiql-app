import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Welcome from './pages/welcome/welcome';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Welcome />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
