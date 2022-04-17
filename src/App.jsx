import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './layout/Header/Header';
import { Footer } from './layout/Footer/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='container content'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  );
}
