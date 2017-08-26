import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {connect} from 'react-redux'
import {closeDrawer} from '../../store/data/layout/actions'

class LeftDrawer extends Component {
  render() {
    const {isDrawerOpened, closeDrawer} = this.props

    return (
      <Drawer
        docked={false}
        width={200}
        open={isDrawerOpened}
        onRequestChange={(open) => this.setState({open})}
      >
        <MenuItem onClick={closeDrawer}>Menu Item</MenuItem>
        <MenuItem onClick={closeDrawer}>Menu Item 2</MenuItem>
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