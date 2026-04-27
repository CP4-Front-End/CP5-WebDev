import { BrowserRouter, Routes, Route} from "react-router-dom"
import Card from "./routes/Card" 
import Home from "./routes/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./routes/Error"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/card" element={<Card/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App