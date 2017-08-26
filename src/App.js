import React, {Component} from 'react'
import {
  Redirect,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import DrinkDetails from './views/DrinkDetails'
import TopBar from './components/TopBar'
import LeftDrawer from './components/Drawer'
import DrinkList from "./views/DrinkList";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <TopBar/>
              <LeftDrawer/>
              <Route exact path="/" render={() => <Redirect to="/list"/>}/>
              <Route exact strict path="/list" component={DrinkList}/>
              <Route exact strict path="/details" component={DrinkDetails}/>
          </div>
        </Router>
    )
  }
}

export default App
