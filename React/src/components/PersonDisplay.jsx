import "../styles/userbox.css";
import profileImage from "../assets/images/nour.jpg";

export default function PersonDisplay({ currentFilter, onChangeFilter }) {
  const filters = ["daily", "weekly", "monthly"];
  return (
    <div className="user-container">
      <div className="username">
        {" "}
        <img src={profileImage} className="user-image" />
        <p className="report">Report for</p>
        <p className="name">
          Nour <br />
          Mohamed
        </p>
      </div>

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
