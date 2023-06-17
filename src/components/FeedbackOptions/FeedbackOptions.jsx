import PropTypes from 'prop-types';
import { CounterBtn, CounterField } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return <CounterField>{options.map(option =>
          <CounterBtn type="button" key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </CounterBtn>)}
        </CounterField>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.elementType.isRequired
};

export default FeedbackOptions;