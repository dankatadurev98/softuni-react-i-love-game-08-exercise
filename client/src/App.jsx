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
import Logout from "./components/logout/Logout"
import Edit from "./components/edit/Edit"


function App() {

  const [userRegister, setUserRegister] = useState([])
  const [userLogin, setUserLogin] = useState(null)


  function registerUser(email, password) {

    if (userRegister.some(user => user.email === email)) {
      throw new Error('Email is taken!')
    }
    const newUser = {email,password};


    setUserRegister(state => [...state, newUser]);

    setUserLogin(newUser)
  }


  function loginUser(email, password) {

    const user = userRegister.find(user => user.email === email && user.password === password)

    if (!user) {
      throw new Error('Invalid email or password')

    } 
   
    setUserLogin(user)
  }

  function userLogout(){
    setUserLogin(null)
  }

  return (
    <>
      <Header userLogin={userLogin} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/games/:id/details" element={<Details />} />
        <Route path="/games/:id/edit" element={<Edit/>}/>
        <Route path="/addGame" element={<AddGame />} />
        <Route path="/register" element={<Register user={userRegister} onRegister={registerUser} />} />
        <Route path='/login' element={<Login user={userLogin} onLogin={loginUser} />} />
        <Route path="/logout" element={<Logout onLogout={userLogout}/>}/>
      </Routes>
      <Footer />

    </>

  )
}

export default App
