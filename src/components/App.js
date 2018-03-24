import React from 'react'
import Monzo from '../services/monzo'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    // init service
    this.monzo = new Monzo()
  }

  async componentWillMount() {
    // init empty state to avoid null errors before the request has finished
    this.setState({})
    this.setState(await this.monzo.whoAmI())
  }

  render() {
    return <h1>You are {this.state.authenticated ? '' : 'not'} logged in</h1>
  }
}
