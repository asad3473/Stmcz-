import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import Navbar from './components/commonpages/Navbar'
import Footer from './components/commonpages/Footer'

import Home from './pages/Home'
import Apply from './pages/Apply'
import EmployeeSupport from './pages/EmployeeSupport'
import TieredSystem from './pages/TieredSystem'
import About from './pages/About'
import Contact from './pages/Contact'
import BlogSection from './components/Blogs/BlogSection'
import BlogDetail from './components/Blogs/BlogDetail'

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
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'blog',
        element: <BlogSection />
      },
      {
        path: 'blog/:slug',
        element: <BlogDetail />
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={routes} />
}