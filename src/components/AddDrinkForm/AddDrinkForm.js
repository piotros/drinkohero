import React from 'react'
import { TextField } from 'material-ui'

class AddDrinkForm extends React.Component {
  render() {
    return (
      <form className="add-drink">
        <TextField floatingLabelText="Nazwa drinka" />
        {/*<br />*/}
        <TextField floatingLabelText="Składniki" fullWidth={true} />
      </form>
    )
  }
}

export default AddDrinkForm
