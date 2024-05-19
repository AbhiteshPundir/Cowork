import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Login from './Pages/Login'
import About from './Pages/About'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='pricing' element={<Home/>}/>
      <Route path='blog' element={<Home/>}/>
      <Route path='events' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Home/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='{classes.main}'>
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>,
)
