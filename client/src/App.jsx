import { Route, Routes } from "react-router"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Body from './components/body/Body'
import Catalog from "./components/catalog/Catalog"


function App() {


  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/catalog" element={<Catalog/>}/>
      </Routes>
      <Footer />

    </>

  )
}

export default App
