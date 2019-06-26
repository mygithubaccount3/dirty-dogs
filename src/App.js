import React from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Contact from './components/Contacts'
import Footer from './components/Footer'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Route path="/" exact component={Content}/>
          <Route path="/contact" component={Contact} />
          <Footer />
      </BrowserRouter>
  );
}

export default App;
