import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import './App.css'

function Home() {

  var navigate = useNavigate()

  function sayHi() {
    alert('Hi, Bellu...')
  }

  return(
    <div>
      <h1>Welcome Guys!</h1>
      <Link className="link" to={'/sumofnaturals'}>Sum of N Naturals Numbers</Link>
    </div>
  )
}

export default Home