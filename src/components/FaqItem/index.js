// Write your code here.
import {Component} from 'react'
import './index.css'
class FaqItem extends Component {
  state = {ishidden: true}
  oncliking = () => {
    this.setState(prevState => ({
      ishidden: !prevState.ishidden,
    }))
  }

  render() {
    const {ishidden} = this.state
    const {eachfaqsdetails} = this.props
    const {id, questionText, answerText} = eachfaqsdetails
    const imgUrl = ishidden
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    const imgAlt = ishidden ? 'plus' : 'minus'
    return (
      <li className="item">
        <div className="questionanswer">
          <h1>{questionText}</h1>
          {!ishidden && <p value="answer">{answerText}</p>}
        </div>
        <div>
          <button type="button" onClick={this.oncliking}>
            <img src={imgUrl} className="img" alt={imgAlt} />
          </button>
        </div>
      </li>
    )
  }
}
export default FaqItem
