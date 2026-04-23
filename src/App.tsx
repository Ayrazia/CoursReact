import './App.css'
import {Route, Routes} from "react-router";
import Header from "./components/Header.tsx";
import Detail from "./pages/Detail.tsx";
import Films from './pages/Films'
import HomePage from './pages/HomePage.tsx'
import Personnages from './pages/Personnages'
import Planetes from './pages/Planetes'


function App() {

  return (
      <>
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/films" element={<Films/>}/>
            <Route path="/films/:id" element={<Detail/>}/>
            <Route path="/personnages" element={<Personnages/>}/>
            <Route path="/planetes" element={<Planetes/>}/>
            <Route path="*" element={<p>Page introuvable</p>}/>
          </Routes></>
  )
}

export default App
