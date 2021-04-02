import './App.css';
import React from 'react';
import {Container} from 'react-bootstrap';
import { Router } from '@reach/router';
import Header from './views/Header';
import AllPosts from './components/AllPosts';
import AboutUs from './views/AboutUs';
import OnePost from './components/OnePost';
import AdminLogin from './components/AdminLogin';
import Admin from './views/Admin';
import UpdatePost from './components/UpdatePost';


function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Router>
          <AllPosts path='/cuteinsurgence' />
          <AboutUs path='/aboutus' />
          <OnePost path='/posts/:id' />
          <AdminLogin path='/admin/login' />
          <Admin path='/admin/home' />
          <UpdatePost path='/admin/update/:id' />
        </Router>
      </Container>
    </div>
  );
}

export default App;
