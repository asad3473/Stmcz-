import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './components/commonpages/Navbar'

const MainLayout=()=>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <h1>Footer</h1>
    </>
  )
}
const routes=createBrowserRouter([
  
  {
    element:<MainLayout/>,
    children:[
      {
        path:'/',element:<h1>Home header</h1>
      },
    ]
  }
])

export default function App() {
  return <RouterProvider router={routes} />
}
