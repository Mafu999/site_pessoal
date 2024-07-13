import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import About from './components/About/about';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Blog from './components/Blog/blog';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
