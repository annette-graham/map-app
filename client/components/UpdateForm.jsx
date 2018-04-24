import React from 'react'

class UpdateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //form inputs that will change
      notes: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    // console.log(e.target, e.target.value)
    var key = e.target.notes
    var value = e.target.value
     console.log({key, value});
    this.setState({[key]: value})


    // this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.editNotes(this.state)
  }


  render() {
    return <div className = 'editInfo'>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={this.state.notes} type="text" name="notes" placeholder="Edit Info"/>
        <input type="submit" value="Update Info" />
      </form>
    </div>
  }
}

export default UpdateForm
