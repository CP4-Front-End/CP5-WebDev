import { BrowserRouter, Routes, Route} from "react-router-dom"
import Card from "./routes/Card" 
import Home from "./routes/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/card" element={<Card/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App