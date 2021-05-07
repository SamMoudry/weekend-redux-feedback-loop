import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Supported from '../Supported/Supported.jsx';
import Comments from '../Comments/Comments.jsx';

function App() {

  return (

    <div className='App'>
      <div>
        <Header />
      </div>
      <Router>
        <Route exact path="/" component={Feeling} />
        <Route exact path="/understanding" component={Understanding} />
        <Route exact path="/supported" component={Supported} />
        <Route exact path="/comments" component={Comments} />
      </Router>
    </div>
  );
}

export default App;
