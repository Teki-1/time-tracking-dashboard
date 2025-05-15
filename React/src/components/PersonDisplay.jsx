import "../styles/userbox.css";
import profileImage from "../assets/images/nour.jpg";

export default function PersonDisplay() {
  return (
    <div className="username">
      <img src={profileImage} className="user-image" />
      <p className="report">Report for</p>
      <h1 className="name">Nour</h1>
      <h1 className="name">Mohamed</h1>
      <div className="filter-box"></div>
    </div>
  );
}
