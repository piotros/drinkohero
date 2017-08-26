import * as React from 'react'

import * as layoutActions from '../../store/data/layout/actions'
import { Dialog, FlatButton } from 'material-ui'
import AddDrinkForm from '../AddDrinkForm/AddDrinkForm'
import { connect } from 'react-redux'

export class AddDrinkDialog extends React.Component {
  hide = () => {
    this.props.hideAddDialog()
  }

  actions = [
    <FlatButton onClick={this.hide}>Ok</FlatButton>,
    <FlatButton onClick={this.hide}>Anuluj</FlatButton>
  ]

  render() {
    return (
      <Dialog
        title="Dodaj nowego drinka"
        open={this.props.open}
        actions={this.actions}
      >
        <AddDrinkForm />
      </Dialog>
    )
  }
}

const mapStateToProps = state => {
  return {
    open: state.layout.isAddDialogShown
  }
}

export default connect(mapStateToProps, layoutActions)(AddDrinkDialog)
