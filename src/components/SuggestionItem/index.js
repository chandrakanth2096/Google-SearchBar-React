import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, updateSearchInput} = props
  const {suggestion} = eachSuggestion

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="item">
      <p>{suggestion}</p>
      <button type="button" className="btn" onClick={onClickSuggestion}>
        <img
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
