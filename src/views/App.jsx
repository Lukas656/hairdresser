import "./App.css";
import React, { useState } from 'react'
import { BrowserRouter as Router } from  'react-router-dom'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

function App() {
    
  return (
    <div className="App">
        <Router>
              <Content />
              <Menu/>
        </Router>
      
      </div>    
  );
}

export default App;