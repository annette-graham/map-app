import React from 'react'

class UpdateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //form inputs that will change
      name: '',
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
      <input onChange={this.handleChange} type="text" name="name" placeholder="Country Name"/>
      <input type="submit" value="Update Info" />
    </form>
  }
}

export default UpdateForm
