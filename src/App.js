import logo from './logo.svg';
import React from 'react';  
import './App.css';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';

function App() {  
   
    return ( 
      <>
        <div className="lds-dual-ring">
        
          <div className="wrapper">
            <Router>
              <Navbar />
                  <Routes>  
                    <Route exact path='/' element={< Home />}></Route>  
                    <Route exact path='/about' element={< About />}></Route>    
                  </Routes>    
            </Router>
            </div>
        </div>  
      </>  
   );   
}  

export default App;
