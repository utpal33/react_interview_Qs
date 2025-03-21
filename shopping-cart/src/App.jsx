import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import { Cart, Home } from './pages'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route path='' element={<Home />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
