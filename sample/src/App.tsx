import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@/App.css";

import Header from "@/components/pattern/Header";
import Nav from "@/components/pattern/Nav";
import Footer from "@/components/pattern/Footer";
import Content1 from "@/components/pages/Content1";
import Content2 from "@/components/pages/Content2";
import Content3 from "@/components/pages/Content3";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Content1 />} />
              <Route path="/content2" element={<Content2 />} />
              <Route path="/content3" element={<Content3 />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
