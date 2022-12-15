import { AccountBox, Dashboard, Language, PanTool, Settings, VerifiedUser } from '@mui/icons-material'
import React from 'react'

// import AdminDashboard from '../pages/dashboard'

const AdminDashboard = React.lazy(() => import("../pages/dashboard"));
const LanguageComponent = React.lazy(() => import("../pages/dashboard"));
const RoleComponent = React.lazy(() => import("../pages/dashboard"));
const UsersComponent = React.lazy(() => import("../pages/dashboard"));
const PermissionsComponent = React.lazy(() => import("../pages/dashboard"));


const routes = [
  {
    name: "Dashboard",
    path: "/",
    icon: <Dashboard />,
    component: AdminDashboard,
    children: []
  },
  {
    name: "Master Data",
    path: "/",
    icon: <Settings />,
    component: null,
    children: [
      {
        name: "Language",
        path: "/",
        icon: <Language />,
        component: <LanguageComponent />,
      },
      {
        name: "Role",
        path: "/",
        icon: <AccountBox />,
        component: <RoleComponent />,
      },
      {
        name: "Users",
        path: "/",
        icon: <VerifiedUser />,
        component: <UsersComponent />,
      },
      {
        name: "Permissions",
        path: "/",
        icon: <PanTool />,
        component: <PermissionsComponent />,
      },
    ]
  }


];


export default routes