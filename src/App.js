import React from 'react';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Contact from './components/Contacts'
import Footer from './components/Footer'
import { BrowserRouter, Route } from 'react-router-dom'
import { createBrowserHistory } from "history";

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Route path="/dirty-dogs" exact component={Content}/>
          <Route path="/dirty-dogs/contact" component={Contact} />
          <Footer />
      </BrowserRouter>
  );
}

const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
})

export default App;
