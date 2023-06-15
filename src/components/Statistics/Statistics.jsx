const Statistics = ({ items }) => {
  const options = Object.keys(items)
  const Items = options.map((option) => <li key={option}>{option.charAt(0).toUpperCase() + option.slice(1)}: {items[option]}</li>)

  return (
    <div>
      <h2>Statistics</h2>
        <ul>
          {Items}
        </ul>
    </div>
    )
};

export default Statistics;