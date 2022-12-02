import { BrowserRouter, Route, Routes } from "react-router-dom"
import WelcomePage from "./welcomePage"
import UseState from "./01_useState"
import UseInput from "./02_useInput"
import UseTabs from "./03_useTabs"
import UseEffect from "./04_useEffect"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/01" element={<UseState />} />
                <Route path="/02" element={<UseInput />} />
                <Route path="/03" element={<UseTabs />} />
                <Route path="/04" element={<UseEffect />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
