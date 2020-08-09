import React from 'react';
import Nav from './components/Nav'
import Searchbar from './components/Searchbar'
import EmployeeTable from './components/EmployeeTable';
import './App.css';

class App extends React.Component() {
  state = {
    result:[],
    search: ''
  };
  
  render () {
    return (
      <>
      <Nav />
      
      <EmployeeTable />
      </>
  
    )
  }
    
}

export default App;
