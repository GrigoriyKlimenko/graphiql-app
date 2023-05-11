import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Welcome from './pages/welcome';
import Graphiql from './pages/graphiql';
import NotFound from './pages/404';
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
            <Route path="/graphiql" element={<Graphiql />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
