import React from 'react';
import './App.css';
import Dashboard from './views/Dashboard';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
  );
}

export default App;
