import DashboardDisplay from "./components/DashboardDisplay";
import PersonDisplay from "./components/PersonDisplay";
import "./styles/userbox.css";

function App() {
  return (
    <div className="container">
      <PersonDisplay />
      <DashboardDisplay />
    </div>
  );
}

export default App;
