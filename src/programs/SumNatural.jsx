import { Link } from 'react-router-dom'
import './css/SumNatural.css'

function SumNatural() {

  function Action() {
    var n_str = window.prompt("Enter the N value : ")
    var n_int = parseInt(n_str)
    var ans = 0
    for(var i = 1; i <= n_int; i++) {
      ans += i
    }
    alert("Sum of " + n_str + " Natural Numbers : " + ans)
  }

  return(
    <div>
      Sum of N Natural Numbers.. <br />
      <button className="action-btn" onClick={Action}>Start!</button> <br />
      <Link className='action-btn' to={'/home'}>Back to Home</Link>
    </div>
  )
}

export default SumNatural