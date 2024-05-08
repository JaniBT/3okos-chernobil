import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Menus from "./Pages/Menus"
import NotFound from "./Pages/NotFound"
import Gallery from "./Pages/Gallery"
// import Stories from "./Pages/Stories"
// import Travel from "./Pages/Travel"
// import Places from "./Pages/Places"
import Thoughts from "./Pages/Thoughts"

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/menus/gallery" element={<Gallery />} />
        {/* <Route path="/menus/stories" element={<Stories />} /> */}
        {/* <Route path="/menus/travel" element={<Travel />} /> */}
        <Route path="/menus/thoughts" element={<Thoughts />} />
        {/* <Route path="/menus/places" element={<Places />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App