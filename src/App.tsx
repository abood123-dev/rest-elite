import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
console.log("🔄 Rendering App.tsx");
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
// Remove-Item -Recurse -Force docs

