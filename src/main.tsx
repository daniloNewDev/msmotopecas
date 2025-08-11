import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import HomePage from './routes/HomePage.tsx'
import SearchPlate from './routes/SearchPlate.tsx'
import NewServiceOrder from './routes/NewServiceOrder.tsx'

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
        path: "/searchplate",
        element: <SearchPlate />
      },
      {
        path: "/newserviceorder",
        element: <NewServiceOrder />
      },
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
