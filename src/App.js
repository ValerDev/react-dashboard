import React from 'react';
import "./index.scss"
import "./App.scss"
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dropdown from './components/Dropdown';
function App() {
  return (
    <div id="App">
      <Router>
        <Dashboard />
        <div className="main-content">
          <Header />
          <section id="content">
            <Switch>
              <Route path="/" exact>
                <h1>Home page</h1>
              </Route>
              <Route path="/home" exact>
                <Dropdown dTitle="select.." content={
                  <div>
                    <a href='/home/menu_1'>menu_1</a>
                    <a href='/home/menu_2'>menu_2</a>
                  </div>}
                />
              </Route>
              <Route path="/tree" exact>
              </Route>
            </Switch>
          </section>
        </div>
      </Router>
    </div>
  )
}

export default App;