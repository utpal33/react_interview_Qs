import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Github, { getInfoFromGithub } from './components/Github';
import About from './components/About';
import Navbar from './components/Navbar';
import Layout from './layouts/Layout';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

function App() {

  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route loader={getInfoFromGithub} path='github' element={<Github/>} />
        </Route>
      </Routes>
    </BrowserRouter> */}

    {/* using createBrowserRouter */ }
    

    </>
  )
}


export default App
