import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseState from "./01_useState";
import UseInput from "./02_useInput";
import UseTabs from "./03_useTabs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/01" element={<UseState />} />
        <Route path="/02" element={<UseInput />} />
        <Route path="/03" element={<UseTabs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
