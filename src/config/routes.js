import {lazy} from 'react'

export const routes = {
  loginpage: {
    path: '/',
    component: lazy(() => import('../pages/Loginpage/Loginpage')),
    exact: true
  },
}

export const renderRoutes = Object.entries(routes)