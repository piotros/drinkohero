import React, { Component } from 'react'
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom'

import TopBar from './components/TopBar'
import LeftDrawer from './components/Drawer'

import DrinkDetails from './views/DrinkDetails'
import DrinkList from './views/DrinkList'
import Favorites from './views/Favorites'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopBar />
          <LeftDrawer />
          <Route exact path="/" render={() => <Redirect to="/list" />} />
          <Route exact strict path="/list" component={DrinkList} />
          <Route exact strict path="/favorites" component={Favorites} />
          <Route exact strict path="/details/:id" component={DrinkDetails} />
        </div>
      </Router>
    )
  }
}

export default App
