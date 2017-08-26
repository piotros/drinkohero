import React, {Component} from 'react'
import TopBar from "./components/TopBar/TopBar"
import {
    Redirect,
    Route,
    BrowserRouter as Router
} from "react-router-dom";
import DrinkDetails from "./views/DrinkDetails";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <TopBar/>
              <Route exact path="/" render={() => <Redirect to="/details"/>}/>
              <Route exact strict path="/details" component={DrinkDetails}/>
          </div>
        </Router>
    )
  }
}

export default App
