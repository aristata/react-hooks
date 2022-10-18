import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseStatePage from "./01_useState";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/01" element={<UseStatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
