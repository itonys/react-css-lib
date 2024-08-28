import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@/App.css";

import Content1 from "@/components/pages/Content1";
import Content2 from "@/components/pages/Content2";
import Content3 from "@/components/pages/Content3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Content1 />} />
        <Route path="/content2" element={<Content2 />} />
        <Route path="/content3" element={<Content3 />} />
      </Routes>
    </Router>
  );
}

export default App;
