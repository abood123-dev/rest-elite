import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import Bout from "./pages/Bout";
import FAQ from "./pages/FAQ";
import Signup from "./pages/Signup";
import Chefs from "./pages/Chefs";
import Shop from "./pages/Shop";
import More from "./pages/more";
console.log("🔄 Rendering App.tsx");
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Bout" element={<Bout />} />
        <Route path="/Faq" element={<FAQ />} />
        <Route path="/Sign" element={<Signup />} />
        <Route path="/Chefs" element={<Chefs />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/More/:id" element={<More />} />
      </Routes>
    </Router>
  );
}

export default App;
// Remove-Item -Recurse -Force docs

