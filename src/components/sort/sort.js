import './style.css';

function Sort() {
  return (
    <div className="sort">
      <h3>
        Sort by price:
      </h3>
      <label className="sort-label">
        <input className="sort-radio" type="radio" />
        <span>High</span>
      </label>
      <label className="sort-label">
        <input className="sort-radio" type="radio" />
        <span>Low</span>
      </label>
    </div>
  );
}

export default Sort;
