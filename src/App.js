import { BrowserRouter, Route, Routes } from "react-router-dom"
import WelcomePage from "./welcomePage"
import UseState from "./01_useState"
import UseInput from "./02_useInput"
import UseTabs from "./03_useTabs"
import UseEffect from "./04_useEffect"
import UseTitle from "./05_useTitle"
import UseClick from "./06_useClick"
import UseConfirm from "./07_useConfirm"
import UsePreventLeave from "./08_usePreventLeave"
import UseBeforeLeave from "./09_useBeforeLeave"

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/01" element={<UseState />} />
              <Route path="/02" element={<UseInput />} />
              <Route path="/03" element={<UseTabs />} />
              <Route path="/04" element={<UseEffect />} />
              <Route path="/05" element={<UseTitle />} />
              <Route path="/06" element={<UseClick />} />
              <Route path="/07" element={<UseConfirm />} />
              <Route path="/08" element={<UsePreventLeave />} />
              <Route path="/09" element={<UseBeforeLeave />} />
          </Routes>
        </BrowserRouter>
    )
}

export default App
