import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import { closeDrawer, showAddDialog } from '../../store/data/layout/actions'
import {
  ActionFavorite,
  ActionSearch,
  ContentAddCircle
} from 'material-ui/svg-icons/index'

class LeftDrawer extends Component {
  handleAdd = () => {
    this.props.closeDrawer()
    this.props.showAddDialog()
  }

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
          onClick={this.handleAdd}
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
  closeDrawer,
  showAddDialog
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawer)
