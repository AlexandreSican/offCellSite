import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/home"
import { Categorias } from "./components/categorias"
import { Builds } from "./components/builds"
import { Farms } from "./components/farms"
import { Dicas } from "./components/dicas"
import { Ferramentas } from "./components/ferramentas"



function App() {


  return (
    <BrowserRouter>
      <div className="bg-gray-800 flex flex-col justify-center items-center overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/categorias" element={<Categorias/>} />
        <Route path="/builds" element={<Builds/>} />
        <Route path="/farms" element={<Farms/>} />
        <Route path="/dicas" element={<Dicas/>} />
        <Route path="/ferramentas" element={<Ferramentas/>} />
      </Routes>
      </div>
    </BrowserRouter>
    
  )
}


export default App
