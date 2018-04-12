import React from 'react'

class Update extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //form inputs that will change
      name: '',
      language: '',
      capital: '',
      population: '',
      currency: '',
      cultural_need_to_knows:,
      


    }
    //this.functionName = this.functionName.bind(this)
  }

  handleChange(e) {
    // console.log(e.target, e.target.value)
    var key = e.target.name
    var value = e.target.value
    // console.log({key, value});
    this.setState({[key]: value})


    // this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.makeUpdate(this.state)
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} type="text" name="name" placeholder="Cat Name"/>
      <input onChange={this.handleChange} type="text" name="description" placeholder="Cat description"/>
      <input type="submit" value="MAKE EM CATT FRIENDS" />
    </form>
  }
}

export default Update
