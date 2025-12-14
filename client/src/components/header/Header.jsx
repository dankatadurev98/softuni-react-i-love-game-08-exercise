import { Link, useNavigate } from "react-router"
import { authContext } from "../../context/authContext"
import { useContext } from "react"


export default function Header() {

  const { isAuthenticated,logout } = useContext(authContext)
  const navigate = useNavigate()
  

  return (
    <header>
      {/* Navigation */}
      <nav>
        <Link className="home" to="/">
          {" "}
          <img src="./images/logo.png" alt="logo" />{" "}
        </Link>
        <Link to="/catalog">Catalog</Link>

{!isAuthenticated && (
  <>
   
         <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </>
)}

        {isAuthenticated && (
          <div id="user">
            <Link to="/addGame">Add Game</Link>
            <Link to="/" onClick={logout}>Logout</Link>
          </div>
        )}
      </nav>
    </header>
  )
}