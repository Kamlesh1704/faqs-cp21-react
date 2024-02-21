// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'
class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="div">
        <div className="card">
          <h1 className="heading">Faqs</h1>
          <ul>
            {faqsList.map(eachfaqs => {
              return <FaqItem eachfaqsdetails={eachfaqs} key={eachfaqs.id} />
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
