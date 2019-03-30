import { Component } from 'react';
import getData, { getSearchData } from '../api/getData';
import HomePage from '../components/HomePage';

class App extends Component{
  state = {
    val: ""
  }
  componentDidMount = () => {
    this.setState({
      val: 'moEngage'
    })
  }
  render() {
    return (
      <HomePage />
    )
  }
}

export default App;