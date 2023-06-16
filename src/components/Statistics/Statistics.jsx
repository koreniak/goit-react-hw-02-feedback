import PropTypes from 'prop-types';

const Statistics = props => {
  const options = Object.keys(props);

  return options.map(option => <p key={option}>
    {option === "positivePercentage" ? "Positive feedback" : option}: {props[option]}
  </p>)
};

export default Statistics;

Statistics.propTypes = {
  props: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired
  })
};