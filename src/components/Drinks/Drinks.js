import React, { Component } from 'react'
import Drink from '../Drink'
import { connect } from 'react-redux'
import { getDrinks } from '../../services/drinks'
import './style.css'
import { List, ListItem } from 'material-ui'
import { Link } from 'react-router-dom'

class Drinks extends Component {
  componentDidMount() {
    this.props.getDrinks()
  }

  render() {
    const { data } = this.props

    return (
      <div className="drinks">
        <List>
          {data
            ? data.map(drink =>
                <ListItem key={drink._id}>
                  <Link className="link" to="/details">
                    <Drink drink={drink} />
                  </Link>
                </ListItem>
              )
            : null}
        </List>
      </div>
    )
  }
}

const mapStatesToProps = state => {
  const { data } = state.drinks

  return {
    data
  }
}

const mapDispatchToProps = {
  getDrinks
}

export default connect(mapStatesToProps, mapDispatchToProps)(Drinks)
