import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Menus from "./Pages/Menus"
import NotFound from "./Pages/NotFound"
import Gallery from "./Pages/Gallery"

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/menus/gallery" element={<Gallery />} />
        <Route path="/menus/stories" element={<Gallery />} />
        <Route path="/menus/travel" element={<Gallery />} />
        <Route path="/menus/thoughts" element={<Gallery />} />
        <Route path="/menus/places" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App