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
import Menu_1 from './components/content/Menu_1';
import Menu_2 from './components/content/Menu_2';
class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Router>
          <Dashboard />
          <div className="maincontent">
            <Header />
            <Switch>
              <Route path="/menu_1">
                <Menu_1 />
              </Route>
              <Route path="/menu_2">
                <Menu_2 />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;