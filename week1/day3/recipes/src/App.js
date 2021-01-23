import Pepito from "./components/Pepito"
import { useState } from "react"

function App() {
  const [showPepito, setShowPepito] = useState(false)
  return (
    <div>
      <h1>Lifecycle</h1>
      <button onClick={() => setShowPepito(!showPepito)}>toggle pepito</button>
      {showPepito && <Pepito />}
    </div>
  )
}

export default App
