import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseState from "./01_useState";
import UseInput from "./02_useInput";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/01" element={<UseState />} />
        <Route path="/02" element={<UseInput />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
