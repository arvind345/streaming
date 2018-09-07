import React, { Component } from 'react';
import NavHeader from './app/common/NavHeader';
import Footer from './app/common/Footer';
import Login from './app/common/Login';
import Home from './app/home/Home';
import Details from './app/detailPage/detail';
import Filter from './app/listPage/Filter';
import Cast from './app/detailPage/cast';

//import './App.scss';
import './assets/css/common.css';
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
                    <Route path='/login'  component={Login} />
                    <Route path='/filter'  component={Filter} />
                    <Route path='/cast'  component={Cast} />
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
