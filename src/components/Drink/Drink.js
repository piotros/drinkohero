import React, { Component } from 'react'
import { Paper } from 'material-ui'
import './style.css'

class Drink extends Component {
  render() {
    const { name, ingredients } = this.props.drink
    const last = ingredients.length - 1

    return (
      <div className="drink-container">
        <h3>
          {name}
        </h3>
        {ingredients
          ? <div className="ingredients">
              <span>Składniki: </span>
              {ingredients.map((ingredient, index) =>
                <span key={ingredient._id}>
                  <i>
                    {ingredient.name}
                    {index !== last ? ',' : null}{' '}
                  </i>
                </span>
              )}
            </div>
          : null}
      </div>
    )
  }
}
export default Drink
