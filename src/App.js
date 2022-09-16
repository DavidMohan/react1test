import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'

function App() {

  // var style = {
  //   color: '#61dafb'
  // }

  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        {/* <a href='/'>Home</a>&nbsp;&nbsp;
        <a href='/about'>About</a>&nbsp;&nbsp;
        <a href='/contact'>Contact</a> */}
        <div className='links'>
          <Link className='link' to={'/home'}>Home</Link>&nbsp;&nbsp;
          <Link className='link' to={'/about'}>About</Link>&nbsp;&nbsp;
          <Link className='link' to={'/contact'}>Contact</Link>&nbsp;&nbsp;
        </div>
        <Routes>
          <Route path='/react1test' element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
