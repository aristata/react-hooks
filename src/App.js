import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseState from "./01_useState";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/01" element={<UseState />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
