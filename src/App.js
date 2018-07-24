import React, { Component } from 'react';
import NavHeader from './app/common/NavHeader';
import Footer from './app/common/Footer';
import Home from './app/home/Home';
import Details from './app/detailPage/detail';

//import './App.scss';
import './assets/css/common.scss';
import {BrowserRouter,  Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <NavHeader/>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/detail'  component={Details} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
