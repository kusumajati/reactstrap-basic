import React from 'react';
import LandingPage from './LandingPage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './common/Header'
import Homepage from './LandingPage/Homepage';
import Show from './User/Show'

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Route exact path='/' component={LandingPage}></Route>
        <Route exact path='/homepage/:name' component={Homepage} ></Route>
        <Route path='/user' component={Show} ></Route>
      </Router>
    </div>
  );
}

export default App;
