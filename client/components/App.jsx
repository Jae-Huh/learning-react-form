import React from 'react'

const App = () => {
  return (
    <div>
      <UserForm />
    </div>
  )
}


class UserForm extends React.Component {
  constructor () {
    super ()
    this.state = {
      name: 'jae',
      email: 'jae@jae.jae'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleSubmit (evt) {
    evt.preventDefault()
    console.log(this.state.name, this.state.email)
  }

  handleChange (evt) {
    const inputName = evt.target.name
    this.setState({
      [inputName]: evt.target.value
    })
  }


  render () {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={this.handleChange} value={this.state.name} />
        <input type="email" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default App
