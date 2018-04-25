import React from 'react'
import App from './App'


class UpdateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }


  handleChange(e) {
    console.log(e.target, e.target.value)
    var key = e.target.name
    var value = e.target.value
    this.setState({[key]: value})
  }


  handleSubmit(e) {
    e.preventDefault()
    console.log("111111111111111111")
    console.log("notes from update form" + this.state.notes)
    this.props.editNotes(this.state)
  }


  render() {
    console.log("update form")
    return <div className = 'editInfo'>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.notes} type="text" name="notes" placeholder="Edit Info"/>
        <input type="submit" value="Update Info" />
      </form>
      <button onClick={this.props.toggleEdit}>Cancel</button>
    </div>
  }
}


export default UpdateForm
