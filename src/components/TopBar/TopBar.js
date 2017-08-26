import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import {connect} from 'react-redux'
import {openDrawer} from '../../store/data/layout/actions'

class TopBar extends Component {
  render() {
    const {openDrawer} = this.props

    return (
      <AppBar
        title="DrinkoHero"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={openDrawer}
      />
    )
  }
}


const mapDispatchToProps = {
  openDrawer
}

export default  connect(null, mapDispatchToProps)(TopBar)