import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import Circle from './components/Shapes/Circle.jsx'
import Square from './components/Shapes/Square.jsx'
import Bill from './components/Bill/bill.jsx'
import Star from './components/Shapes/Star.jsx'
import Triangle from './components/Shapes/triangle.jsx'
import Inventory from './components/Inventory/Inventory.jsx'
import Customize from './components/Logic/customize.jsx'
import Automatic from './components/Logic/Automatic.jsx'
import UserGivenQuantity from './components/Logic/UserGivenQuantity.jsx'
import UserGivenIngredients from './components/Logic/UserGivenIngredients.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/About' element={<About/>}> </Route>
      <Route path='/customize' element={<Customize/>}></Route>
      <Route path='/automatic' element={<Automatic/>}></Route>
      <Route path='/user-given-quantity' element={<UserGivenQuantity/>}></Route>
      
      <Route path="/ingredients" element={<UserGivenIngredients/>} />
      <Route path='/round' element={<Circle/>}></Route>
      <Route path='/square' element={<Square/>}></Route>
      <Route path='/bill' element={<Bill/>}></Route>
      <Route path='/star' element={<Star/>}></Route>
      <Route path='/triangle' element={<Triangle/>}></Route>
      <Route path='/inventory' element={<Inventory/>}></Route>





      
 
    </Route>
  ),
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
