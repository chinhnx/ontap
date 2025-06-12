import { useState } from 'react'

// import './App.css'
import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Oders from './pages/Oders'
import InsuranceOrders from './layouts/InsuranceOrders'



function App() {
    const element = useRoutes([
        {path:"",
        element:<InsuranceOrders/>,
        children: [
          {path : "oders",
            element: <Oders/>
          },

        ]
        }

    ])
  return (
    <div>{element}</div>
  )
}

export default App
