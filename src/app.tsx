import React from 'react'

import { Navigation, Router } from '@components'

import { NAVIGATION_MAIN } from './constants/navigation.constants'
import { ROUTES } from './constants/routes.constants'

export const App = () => {
  return (
    <>
      <Navigation items={NAVIGATION_MAIN} />
      <main>
        <Router routes={ROUTES} />
      </main>
    </>
  )
}
