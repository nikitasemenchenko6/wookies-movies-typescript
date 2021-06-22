import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/detail/:id">
            <Detail/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
