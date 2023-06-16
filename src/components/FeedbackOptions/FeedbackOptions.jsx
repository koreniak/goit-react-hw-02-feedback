import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option =>
    <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>);
};
    
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.elementType.isRequired
};