const Statistics = ({ options, stateItems, title }) => {

  const StatItems = options.map(option =>
    <li key={option}>
      {option.charAt(0).toUpperCase() + option.slice(1)}: {stateItems[option]}
    </li>
  );
  
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {StatItems}
      </ul>
    </div>
  );
};

export default Statistics;