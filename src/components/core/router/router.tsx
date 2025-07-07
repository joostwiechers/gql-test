import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { Route, RouteProps, Routes } from 'react-router-dom'

interface IRouter {
  routes: RouteProps[]
}

export const Router = observer(({ routes }: IRouter) => {
  return (
    <Routes>
      {routes?.map((route) => {
        return <Route path={route.path} element={route.element} key={route.path} />
      })}
    </Routes>
  )
})
