import { Routes, Route, useLocation } from "react-router-dom"
import Animation from "./components/Animation"
import Home from "./pages/Home"
import Page_loader from "./components/Page_loader";

const App = () => {

  let location = useLocation();
  console.log(location)

  return (
    <Page_loader key={location.pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animation" element={<Animation />} />
      </Routes>
    </Page_loader>
  )
}

export default App
