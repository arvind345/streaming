import React, { Component } from 'react';
import NavHeader from './template/common/NavHeader';
import Footer from './template/common/Footer';
//import './App.scss';
import './assets/css/common.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavHeader/>
          <Footer/>
      </div>
    );
  }
}

export default App;
