import React, { Component } from 'react'
import Drink from '../components/Drink/Drink'

class DrinkDetails extends Component {
  render() {
    return (
      <div className="drink-details">
        <Drink />
        <Drink />
      </div>
    )
  }
}

export default DrinkDetails
