// Write your code here
import {component} from 'react'

class Welcome extends component {
  state = {isSubscribe: true}
  buttonAction = () => {
    this.setState(prevState => ({isSubscribe: !prevState.state}))
  }
  subscribeButton = () => {
    const {buttonValue} = this.state
    return buttonValue ? 'subscribe' : 'subscribed'
  }

  render() {
    const {subscribe} = this.subscribeButton()
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thanks you! Happy Learning</p>
        <button className="button" onClick={this.buttonAction}>
          {subscribe}
        </button>
      </div>
    )
  }
}
export default Welcome
