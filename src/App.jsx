import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/home"
import { Categorias } from "./components/categorias"
import { Builds } from "./components/builds"
import { Farms } from "./components/farms"
import { Dicas } from "./components/dicas"
import { Ferramentas } from "./components/ferramentas"
import { Buildsmapper } from "./components/buildsmapper"
import { Buildsallrounder } from "./components/buildsallrounder"
import { Buildsbosser } from "./components/buildsbosser"
import { Buildsnewbiefriendly } from "./components/buildsnewbiefriendly"
import { Buildproblemaseu } from "./components/buildsproblemaseu"
import { Buildsmodezone } from "./components/buildsmodezone"



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
        <Route path="/buildsmapper" element={<Buildsmapper/>} />
        <Route path="/buildsallrounder" element={<Buildsallrounder/>} />
        <Route path="/buildsbosser" element={<Buildsbosser/>} />
        <Route path="/buildsnewbiefriendly" element={<Buildsnewbiefriendly/>} />
        <Route path="/buildproblemaseu" element={<Buildproblemaseu/>} />
        <Route path="/Buildsmodezone" element={<Buildsmodezone/>} />
      </Routes>
      </div>
    </BrowserRouter>
    
  )
}


export default App
