import React from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from './routes'
import DashboardLayout from '../components/layouts/dashboard'
// const DashboardLayout = React.lazy(() => import("../components/layouts/dashboard"));

const index = () => {
  return (
    <Routes>
      {routes?.map((item,i)=>{
        let mainRoutes = [];
        mainRoutes.push(<Route path={item.path} key={i} element={<DashboardLayout Children={item.component} />} />)        
        item.children?.map((childItem, j)=>{
          mainRoutes.push(<Route path={childItem.path} key={j} element={<DashboardLayout Children={childItem.component} />} />)
        })
        return mainRoutes
      })}
    </Routes>
  )
}

export default index