import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Bout from "./pages/Bout";
console.log("🔄 Rendering App.tsx");
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Bout" element={<Bout />} />
      </Routes>
    </Router>
  );
}

export default App;
// Remove-Item -Recurse -Force docs

