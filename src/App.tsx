import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './page/home/home';
import Sidebar from './component/sidebar/sidebar';
import Header from './component/header/header';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Sidebar />

        <div className="main">
          <Header />
          <Routes>
            <Route path='/' element={<Navigate to='/profile?documents=all' />} />
            <Route path='/profile' element={<Home />} />
            {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          <div className='footer'></div>
          {/* <Footer /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
