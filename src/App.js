import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Blog from './pages/Blog/Blog';
import Account from './pages/Account/Account';
import Store from './pages/Store/Store';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/account" element={<Account />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;