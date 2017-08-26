import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import { closeDrawer } from '../../store/data/layout/actions'
import {
  ActionFavorite,
  ActionSearch,
  ContentAddCircle
} from 'material-ui/svg-icons/index'

class LeftDrawer extends Component {
  render() {
    const { isDrawerOpened, closeDrawer } = this.props

    return (
      <Drawer
        docked={false}
        width={200}
        open={isDrawerOpened}
        onRequestChange={open => this.setState({ open })}
      >
        <MenuItem
          primaryText="Dodaj"
          leftIcon={<ContentAddCircle />}
          onClick={closeDrawer}
        />
        <MenuItem
          primaryText="Wyszukaj"
          leftIcon={<ActionSearch />}
          onClick={closeDrawer}
        />
        <MenuItem
          primaryText="Ulubione"
          leftIcon={<ActionFavorite />}
          onClick={closeDrawer}
        />
      </Drawer>
    )
  }
}

const mapStateToProps = state => {
  return {
    isDrawerOpened: state.layout.isDrawerOpened
  }
}

const mapDispatchToProps = {
  closeDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer)
