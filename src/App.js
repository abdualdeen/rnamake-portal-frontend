import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation, Home, About, Contact, Documentation, Workspace } from './index.js';
// import helix from './Graphics/helix.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Navigation />
            <Switch>
                <Route path="/" exact component={() => <Home />} />
                <Route path="/about" exact component={() => <About />} />
                <Route path="/contact" exact component={() => <Contact />} />
                <Route path="/documentation" exact component={() => <Documentation />} />
                <Route path="/workspace" exact component={() => <Workspace />} />
            </Switch>
        </Router>
        {/* <header className="App-header">
            <img src={helix} className="App-logo" alt="logo" />
          <p>RNAMake </p>
        </header> */}
    </div>
  );
}

export default App;
