import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import HomePage from './routes/HomePage.tsx'
import CleanAutomotive from './routes/CleanAutomotive.tsx'
import NewWorkOrder from './routes/NewWorkOrder.tsx'
import SearchWorkOrder from './routes/SearchWorkOrder.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/cleanautomotive",
        element: <CleanAutomotive />
      },
      {
        path: "/newworkorder",
        element: <NewWorkOrder />
      },
      {
        path: "/searchworkorder",
        element: <SearchWorkOrder />
      },
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
