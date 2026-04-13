import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import Navbar from './components/commonpages/Navbar'
import Footer from './components/commonpages/Footer'

import Home from './pages/Home'
import Apply from './pages/Apply'
import EmployeeSupport from './pages/EmployeeSupport'
import TieredSystem from './pages/TieredSystem'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'apply',
        element: <Apply />
      },
      {
        path: 'employee-support',
        element: <EmployeeSupport />
      },
      {
        path: 'tiered-system',
        element: <TieredSystem />
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={routes} />
}