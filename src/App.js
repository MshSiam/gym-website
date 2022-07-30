import "./App.css"
import Hero from "./components/hero/Hero"
import Plan from "./components/plan/Plan"
import Programs from "./components/programs/Programs"
import Reasons from "./components/reasons/Reasons"
function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Programs></Programs>
      <Reasons></Reasons>
      <Plan></Plan>
    </div>
  )
}

export default App
