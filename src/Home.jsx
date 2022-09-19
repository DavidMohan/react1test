import { useNavigate } from "react-router-dom"

function Home() {

  var navigate = useNavigate()

  function sayHi() {
    alert('Hi, Bellu...')
  }

  return(
    <div>
      <h1>Welcome Bell Boy!</h1>
      <button onClick={sayHi}>Hi to React!</button>
    </div>
  )
}

export default Home