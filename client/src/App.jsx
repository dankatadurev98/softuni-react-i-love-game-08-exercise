import { Route, Routes } from "react-router"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import Catalog from "./components/catalog/Catalog"
import Details from "./components/details/Details"
import AddGame from "./components/addGames/AddGames"
import Register from "./components/register/Register"
import Login from "./components/login/Login"


function App() {

  

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/games/:_id/details" element={<Details/>}/>
        <Route path="/addGame" element={<AddGame/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer />

    </>

  )
}

export default App
