import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { RouterProvider, createHashRouter } from 'react-router-dom';


import Biometria from './routes/Biometria.tsx'
import ClasificacionFibra from './routes/ClasificacionFibra.jsx'
import Muestras from './routes/Muestras.tsx'

import CapacidadReproductiva from './routes/CapacidadReproductiva.tsx'
import FemaleForm from './routes/FemaleForm.tsx'
import Login from './Login.jsx'
import Dashboard from './routes/Dashboard.tsx';
import NewRegister from './routes/NewRegister.tsx'


const router = createHashRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/newregister",
    element: <NewRegister></NewRegister>,
  },
  {
    path: "/muestras",
    element: <Muestras></Muestras>,
  },
  {
    path: "/clasificacionfibra",
    element: <ClasificacionFibra></ClasificacionFibra>,
  },
  {
    path: "/biometria",
    element: <Biometria></Biometria>,
  },
  {
    path: "/capacidadreproductiva",
    element: <CapacidadReproductiva></CapacidadReproductiva>,
  },
  {
    path: "/femaleform",
    element: <FemaleForm></FemaleForm>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <RouterProvider router={router}>
   </RouterProvider>
  
  </React.StrictMode>,
)
