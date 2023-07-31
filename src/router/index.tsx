import React from 'react'
import { useRoutes } from 'react-router-dom'
import BasicLayout from '@/layouts/BasicLayout'
import Home from '@/views/Home'

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <BasicLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ])
}
