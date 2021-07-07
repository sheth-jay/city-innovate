import {lazy} from 'react'

export const routes = {
  taskmanagement: {
    path: '/',
    component: lazy(() => import('../pages/Taskmanagement/Taskmanagement')),
    exact: true
  },
  loginpage: {
    path: '/login',
    component: lazy(() => import('../pages/Loginpage/Loginpage')),
    exact: true
  },
  signuppage: {
    path: '/signup',
    component: lazy(() => import('../pages/Signuppage/Signuppage')),
    exact: true
  },
}

export const renderRoutes = Object.entries(routes)