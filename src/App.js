import React, {Component} from 'react'
import {
  Redirect,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import DrinkDetails from './views/DrinkDetails'
import TopBar from './components/TopBar'
import LeftDrawer from './components/Drawer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopBar/>
          <LeftDrawer/>
          <Route exact path="/" render={() => <Redirect to="/details"/>}/>
          <Route exact strict path="/details" component={DrinkDetails}/>
        </div>
      </Router>
    )
  }
}

export default App
