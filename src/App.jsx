import { useState } from "react"
import "./App.css"
import { Navbar } from "./Components/Navbar/Navbar"
import "bootstrap/dist/css/bootstrap.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
