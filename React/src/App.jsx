import DashboardDisplay from "./components/DashboardDisplay";
import PersonDisplay from "./components/PersonDisplay";

function App() {
  return (
    <div className="container">
      <PersonDisplay />
      <DashboardDisplay />
    </div>
  );
}

export default App;
