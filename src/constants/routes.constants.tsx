import * as React from 'react'

import { HomeView } from '../views/home/home.views'

export const ROUTE_PATHS = {
  HOME: '/',
}

export const ROUTE_PATHS_DYNAMIC = {
  COUNTRY_SINGLE: (id: number) => `/countries/${id}`,
}

export const ROUTES = [
  {
    path: '*',
    element: <HomeView />,
  },
]
