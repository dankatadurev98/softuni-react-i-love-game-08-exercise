import { Route, Routes, useNavigate } from "react-router"
import { useState } from "react"


import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import Catalog from "./components/catalog/Catalog"
import Details from "./components/details/Details"
import AddGame from "./components/addGames/AddGames"
import Register from "./components/register/Register"
import Login from "./components/login/Login"


function App() {

  const [userRegister, setUserRegister] = useState([])
  const [userLogin, setUserLogin] = useState(null)
  const navigator = useNavigate()


  function registerUser(email, password) {

    if (userRegister.some(user => user.email === email)) {
      alert('Email is taken!')
      navigator('/')
      return
    }
    setUserRegister(state => [...state, { email, password }])
  }


  function loginUser(email, password) {

    const user = userRegister.find(user => user.email === email && user.password === password)

    if (!user) {
      navigator('/login')
      alert('Invalid email or password')
      return

    } 
   
    setUserLogin(user)


  }

  return (
    <>
      <Header userLogin={userLogin} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/games/:_id/details" element={<Details />} />
        <Route path="/addGame" element={<AddGame />} />
        <Route path="/register" element={<Register user={userRegister} onRegister={registerUser} />} />
        <Route path='/login' element={<Login user={userLogin} onLogin={loginUser} />} />
      </Routes>
      <Footer />

    </>

  )
}

export default App
