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
    var key = e.target.name
    var value = e.target.value
    this.setState({[key]: value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.editNotes(this.state)
  }

  render() {
    return <div className = 'editInfo'>
      <form onSubmit={this.handleSubmit}>
        <input className='input' onChange={this.handleChange} value={this.state.notes} type="text" name="notes" placeholder="Edit Info"/>
        <br/><br/>
        <input className='button' type="submit" value="Update Info" />
      </form> <br/>
      <button className='button' onClick={this.props.toggleEdit}>Cancel</button>
    </div>
  }
}

export default UpdateForm
