import './App.css';
import React from 'react';
import {Router} from '@reach/router';
import Header from './views/Header';
import AllPosts from './components/AllPosts';
import AboutUs from './views/AboutUs';
import OnePost from './components/OnePost';
import AdminLogin from './components/AdminLogin';
import Admin from './views/Admin';

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <AllPosts path= '/cuteinsurgence' />
          <AboutUs path= '/aboutus' />
          <OnePost path= '/posts/:id' />
          <AdminLogin path='/admin/login'/>
          <Admin path= '/admin/home' />
        </Router>
    </div>
  );
}

export default App;
