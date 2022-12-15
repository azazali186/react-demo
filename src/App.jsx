import React from 'react'
import DashboardLayout from './components/layouts/dashboard'

import SetRoutes from './routes/routes'



const Dashboard = React.lazy(() => import("./pages/dashboard"));
const App = () => {
  return (
    <SetRoutes />
  )
}

export default App
