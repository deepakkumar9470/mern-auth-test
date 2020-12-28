import React, { Component } from 'react'
import './App.css';
import AuthContext from './contexts/AuthContext'
import Routes from './Routes';
//import NavBar from './components/NavBar'
class App extends Component {
  render() {
    return (
     
      <AuthContext>
    
         <Routes/>
         
      </AuthContext>
    )
  }
}

export default App
