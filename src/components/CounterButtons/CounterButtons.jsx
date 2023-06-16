const CounterBtns = ({ options, onClick, title }) => {
  const Items = options.map(option =>
    <button type="button" key={option} onClick={() => onClick(option)}>
      {option.charAt(0).toUpperCase() + option.slice(1)}
    </button>);
  
  return (
    <div>
      <h2>{title}</h2>
      {Items}
    </div>
  );
};
    
export default CounterBtns;