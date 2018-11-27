import React, { Component } from 'react';
import 'antd/dist/antd.css';
import NavHeader from './app/common/NavHeader';
import Footer from './app/common/Footer';
import Login from './app/common/Login';
import Home from './app/home/Home';
import Details from './app/detailPage/detail';
import MovieDetails from './app/detailPage/moviedetail';
import Filter from './app/listPage/Filter';
import Cast from './app/detailPage/cast';
import DetailEpisode from './app/detailPage/detail-episodePage';
import CastDetail from './app/detailPage/cast-detail';
import ListPage from './app/listPage/list-page';
import ChannelListPage from './app/listPage/channel-list-page';
import ChennalDetail from './app/detailPage/chennal-detail';
import Genres from './app/listPage/genres';
import Language from './app/listPage/language';
import Profile from './app/common/profile';
import Error from './app/error';

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
                    <Route path='/moviedetail'  component={MovieDetails} />
                    <Route path='/login'  component={Login} />
                    <Route path='/filter'  component={Filter} />
                    <Route path='/cast'  component={Cast} />
                    <Route path='/detailepisode'  component={DetailEpisode} />
                    <Route path='/cast-detail'  component={CastDetail} />
                    <Route path='/list-page'  component={ListPage} />
                    <Route path='/channel-list-page'  component={ChannelListPage} />
                    <Route path='/genres'  component={Genres} />
                    <Route path='/language'  component={Language} />
                    <Route path='/ChennalDetail'  component={ChennalDetail} />
                    <Route path='/profile'  component={Profile} />
                    <Route path='/error'  component={Error} />
                </Switch>
                <Footer/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
