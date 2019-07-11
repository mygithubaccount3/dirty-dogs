import React from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Contact from './components/Contacts'
import Footer from './components/Footer'
import { HashRouter, Route } from 'react-router-dom'

function App() {
  return (
      <HashRouter>
          <Header />
          <Route path="/" exact component={Content}/>
          <Route path="/contact" component={Contact} />
          <Footer />
      </HashRouter>
  );
}

export default App;
