const Statistics = ({ items, options }) => {

  const StatItems = options.map(option =>
    <li key={option}>
      {option.charAt(0).toUpperCase() + option.slice(1)}: {items[option]}
    </li>
  );
  console.log(items)
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        {StatItems}
      </ul>
    </div>
  );
};

export default Statistics;