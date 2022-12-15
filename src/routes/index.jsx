import React from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from './routes'
import DashboardLayout from '../components/layouts/dashboard'
// const DashboardLayout = React.lazy(() => import("../components/layouts/dashboard"));

const index = () => {
  return (
    <Routes>
      {routes?.map((item)=>{
        let mainRoutes = [];
        mainRoutes.push(<Route path={item.path} key={item} element={<DashboardLayout Children={item.component} />} />)        
        item.children?.map((childItem)=>{
          mainRoutes.push(<Route path={childItem.path} key={childItem} element={<DashboardLayout Children={childItem.component} />} />)
        })
        return mainRoutes
      })}
    </Routes>
  )
}


export default index