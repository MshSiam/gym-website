import "./App.css"
import Hero from "./components/hero/Hero"
import Join from "./components/join/Join"
import Plan from "./components/plan/Plan"
import Programs from "./components/programs/Programs"
import Reasons from "./components/reasons/Reasons"
import Tesstimonial from "./components/testimonial/Tesstimonial"
function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Programs></Programs>
      <Reasons></Reasons>
      <Plan></Plan>
      <Tesstimonial></Tesstimonial>
      <Join></Join>
    </div>
  )
}

export default App
