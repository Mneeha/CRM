import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Client from "./page/client";
import Lead from "./page/lead";
import Tasks from "./page/tasks";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/leads" element={<Lead />} />
        <Route path="/tasks-notes" element={<Tasks />} />
      </Routes>
    </Router>
  );
}
export default App;
