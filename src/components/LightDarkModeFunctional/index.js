// Write your code here
import {useState} from 'react'
import './index.css'

const LightDarkModeFunctional = () => {
  const [isDark, setIsDark] = useState(true)

  const handleDak = () => {
    setIsDark(!isDark)
  }

  const textDisplay = isDark ? 'Dark Mode' : 'Light Mode'
  const output = isDark ? 'black' : 'white'
  return (
    <div className="main-container">
      <div className={`sub-container ${output}`}>
        <h1>Click to change Mode</h1>
        <button onClick={handleDak} type="button">
          {textDisplay}
        </button>
      </div>
    </div>
  )
}
export default LightDarkModeFunctional
