import { BrowserRouter, Routes, Route } from "react-router-dom";

import Content from "./pages/Content";
import Home from "./pages/Home";
import Middle from "./pages/Middle";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/list" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
