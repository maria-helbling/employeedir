import React from 'react';
import OnlyPage from './pages/OnlyPage'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  
    return (
      <Router>
        <Route path="/">
          <OnlyPage/>
        </Route>
      </Router>
  
    )
    
}

export default App;
