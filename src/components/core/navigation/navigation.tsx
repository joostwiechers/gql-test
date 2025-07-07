import clsx from 'clsx'
import * as React from 'react'
import { useState } from 'react'

import { INavigationItem, NavigationItem } from '@components'

import styles from './navigation.module.scss'

interface INavigation {
  items?: INavigationItem[]
  variant?: 'footer'
  children?: React.ReactNode
}

export const Navigation = ({ items = [], variant, children }: INavigation) => {
  const [hidden, setHidden] = useState(false)

  const classes = clsx(
    styles['navigation'],
    variant && styles[`navigation--${variant}`],
    hidden && styles['navigation--hidden']
  )

  return (
    <nav className={classes} aria-label='Main'>
      {items?.map((navigationItem) => (
        <NavigationItem {...navigationItem} key={navigationItem.label} />
      ))}
      {children}
    </nav>
  )
}
