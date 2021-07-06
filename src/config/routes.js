import {lazy} from 'react'

export const routes = {
  loginpage: {
    path: '/',
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