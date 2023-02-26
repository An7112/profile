import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './page/home/home';
import Sidebar from './component/sidebar/sidebar';

function App() {
  return (
    // <div className="class-main">
    //   <BrowserRouter>
    //     <div className='main-inner'>
    //       <Dashboard />
    //       <div className='header'></div>
    //       <div className='pages'>
    //         <Routes>
    //           <Route path='/' element={<Navigate to='/Dashboard'/>}/>
    //           <Route path='/Dashboard' element={<Home/>}/>
    //         </Routes>
    //       </div>
    //     </div>
    //   </BrowserRouter>
    // </div>
    <BrowserRouter>
      <div className="container">
        <Sidebar />

        <div className="main">
          {/* <Header /> */}
          <div className='header'></div>
          <Routes>
            <Route path='/' element={<Navigate to='/profile' />} />
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
