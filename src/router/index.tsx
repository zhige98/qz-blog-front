import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/views/home'))
const Detail = lazy(() => import('@/views/detail'))
const Classify = lazy(() => import('@/views/classify'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/classify',
    element: <Classify />
  },
  {
    path: '/detail/:id',
    element: <Detail />
  }
]

export default routes
