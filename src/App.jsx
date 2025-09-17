import DashboardDisplay from "./components/DashboardDisplay";
import PersonDisplay from "./components/PersonDisplay";
import "./styles/userbox.css";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("weekly");
  return (
    <div className="container">
      <PersonDisplay currentFilter={filter} onChangeFilter={setFilter} />
      <DashboardDisplay currentFilter={filter} />
    </div>
  );
}

export default App;
