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
     console.log({key, value});
     this.setState({[key]: value})

  }


  handleSubmit(e) {
    e.preventDefault()
    this.props.editNotes(this.state)
  }


  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }


  render() {
    console.log("update form")
    return <div className = 'editInfo'>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.notes} type="text" name="notes" placeholder="Edit Info"/>
        <input type="submit" value="Update Info" />

      </form>
    </div>
  }
}


export default UpdateForm
