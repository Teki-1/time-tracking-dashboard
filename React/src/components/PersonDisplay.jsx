import "../styles/userbox.css";
import profileImage from "../assets/images/nour.jpg";

export default function PersonDisplay({ currentFilter, onChangeFilter }) {
  const filters = ["daily", "weekly", "monthly"];
  return (
    <div className="username">
      <img src={profileImage} className="user-image" />
      <p className="report">Report for</p>
      <h1 className="name">Nour</h1>
      <h1 className="name">Mohamed</h1>
      <div className="filter-box">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onChangeFilter(filter)}
            className={
              currentFilter === filter
                ? "filter-button active"
                : "filter-button"
            }
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
