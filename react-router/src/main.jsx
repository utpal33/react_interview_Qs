import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layouts/Layout'
import User from './components/User'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home/>} />
    <Route path='about' element={<About/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='user/' element={<User />}>
      <Route path=':id' element={<About />}/>
    </Route>
    {/* <Route loader={getInfoFromGithub} path='github' element={<Github/>} /> */}
    <Route path='*' element={<h1>NO Data Found</h1>} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
