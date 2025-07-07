import * as React from 'react'

import { CountriesView, CountryView } from '@views'

export const ROUTE_PATHS = {
  HOME: '/',
  COUNTRY_SEARCH: '/countries',
  COUNTRY_SINGLE: '/countries/:id',
}

export const ROUTE_PATHS_DYNAMIC = {
  COUNTRY_SINGLE: (id: number) => `/countries/${id}`,
}

export const ROUTES = [
  {
    path: ROUTE_PATHS.COUNTRY_SINGLE,
    element: <CountryView />,
  },
  {
    path: ROUTE_PATHS.COUNTRY_SEARCH,
    element: <CountryView />,
  },
  {
    path: ROUTE_PATHS.HOME,
    element: <CountriesView />,
  },
  {
    path: '*',
    element: <CountriesView />,
  },
]
