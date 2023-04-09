import './index.css'

const FaqItem = props => {
  const {faqDetails, viewAnswerClicked, isViewed} = props
  const {id, questionText, answerText} = faqDetails

  const onClickView = () => {
    viewAnswerClicked(id)
  }

  const imgUrl = isViewed
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altText = isViewed ? 'minus' : 'plus'
  const showLine = isViewed ? <hr className="line" /> : ''
  const showAnswer = isViewed ? answerText : ''

  return (
    <li className="faq-item">
      <div className="q-container">
        <h1 className="faq-q">{questionText}</h1>
        <button type="button" className="button" onClick={onClickView}>
          <img src={imgUrl} alt={altText} className="img" />
        </button>
      </div>
      {showLine}
      <p className="faq-a">{showAnswer}</p>
    </li>
  )
}

export default FaqItem
