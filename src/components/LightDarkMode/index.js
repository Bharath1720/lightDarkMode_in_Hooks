// Write your code here
import {Component} from 'react'
import './index.css'

export default class LightDarkMode extends Component {
  state = {isDark: false}

  handleChange = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const textDisplay = isDark ? 'Dark Mode' : 'Light Mode'
    const output = isDark ? 'black' : 'white'
    return (
      <div className="main-container">
        <div className={`sub-container ${output}`}>
          <h1>Click to change Mode</h1>
          <button onClick={this.handleChange} type="button">
            {textDisplay}
          </button>
        </div>
      </div>
    )
  }
}
