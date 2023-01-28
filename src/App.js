import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import NewsComponent from './Components/NewsComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
          <Route  path='/' element={<NewsComponent key="general" pageSize={6} country="in" category="general" />}/>
          <Route  path='/business' element={<NewsComponent key="business" pageSize={6} country="in" category="business" />}/>
          <Route  path='/technology'element={<NewsComponent key="technology" pageSize={6} country="in" category="technology" />}/>
          <Route  path='/sports'element={<NewsComponent key="sports" pageSize={6} country="in" category="sports" />}/>
          <Route  path='/science'element={<NewsComponent key="science" pageSize={6} country="in" category="science" />}/>
          <Route  path='/health'element={<NewsComponent key="health" pageSize={6} country="in" category="health" />}/>
          <Route  path='/entertainment'element={<NewsComponent key="entertainment" pageSize={6} country="in" category="entertainment"/>}/>
        </Routes>
        </Router>
      </div>

    )
  }
}
