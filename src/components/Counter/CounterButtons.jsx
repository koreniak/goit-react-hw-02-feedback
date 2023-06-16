const CounterBtns = ({options, onClick}) => options.map(option =>
      <button type="button" key={option} onClick={onClick}>
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
);
    
export default CounterBtns;