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
class App extends React.Component {
  state = {
    isMenuClosed: true
  };
  handleMenu = () => {
    this.setState({
      isMenuClosed: !this.state.isMenuClosed
    })
  }
  render() {
    return (
      <div id="App">
        <Router>
          <Dashboard state={this.state} />
          <div className="maincontent">
            <Header state={this.state} handleMenu={this.handleMenu} />
            <section id="content">
              <Switch>
                <Route path="/" exact>
                  <Dropdown dTitle="Select.." content={[<a href="/home/home">home home</a>]} />
                </Route>
                <Route path="/home" exact>
                  <Dropdown dTitle="select some item" content={[<a href="/home/home">home home</a>]}/>
                </Route>
                <Route path="/tree"  exact>
                  <Dropdown dTitle="select some item"/>
                </Route>
              </Switch>
            </section>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;