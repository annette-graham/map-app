import React from 'react'

class UpdateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //form inputs that will change
      name: '',
      language: '',
      capital: '',
      population: '',
      currency: '',
      cultural_need_to_knows: ''

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    // console.log(e.target, e.target.value)
    var key = e.target.name
    var value = e.target.value
     console.log({key, value});
    this.setState({[key]: value})


    // this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.makeUpdate(this.state)
  }


  render() {
    return <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} type="text" name="name" placeholder="Countrty Name"/>
      <input onChange={this.handleChange} type="text" name="language" placeholder="Language Spoken"/>
      <input onChange={this.handleChange} type="text" name="capital" placeholder="Capital City"/>
      <input onChange={this.handleChange} type="text" name="population" placeholder="Population"/>
      <input onChange={this.handleChange} type="text" name="currency" placeholder="Currency Used"/>
      <input onChange={this.handleChange} type="text" name="cultural_need_to_knows" placeholder="Cultural Need-to-Knows"/>
      <input type="submit" value="Update Info" />
    </form>
  }
}

export default UpdateForm
