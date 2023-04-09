import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {
    isViewed: {},
  }

  viewAnswerClicked = id => {
    this.setState(prevState => ({
      isViewed: {
        ...prevState.isViewed,
        [id]: !prevState.isViewed[id],
      },
    }))
  }

  render() {
    const {faqsList} = this.props
    const {isViewed} = this.state
    return (
      <div className="bg-container">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-list-container">
            {faqsList.map(eachFaq => (
              <FaqItem
                faqDetails={eachFaq}
                viewAnswerClicked={this.viewAnswerClicked}
                isViewed={isViewed[eachFaq.id]}
                key={eachFaq.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
