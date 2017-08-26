import React, { Component } from 'react'
import Drinks from '../components/Drinks/Drinks'
import AddDrinkDialog from '../components/AddDrinkDialog'

class DrinkList extends Component {
  render() {
    return (
      <div className="drink-list">
        <Drinks />
        <AddDrinkDialog />
      </div>
    )
  }
}

export default DrinkList
