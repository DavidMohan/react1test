import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import Error from './Error'
import SumNatural from './programs/SumNatural';

function App() {

  // var style = {
  //   color: '#61dafb'
  // }

  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path='/react1test' element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/sumofnaturals' element={<SumNatural/>} />
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
