import clsx from 'clsx'
import * as React from 'react'
import { Link } from 'react-router-dom'

import { Button, Icon, VisuallyHidden } from '@components'

import styles from './navigation-item.module.scss'

export interface INavigationItem {
  destination?: string
  icon?: string
  label: string
  onClick?: (event: React.MouseEvent) => void
}

export const NavigationItem = ({
  destination,
  icon,
  label,
  onClick,
}: INavigationItem) => {
  const classes = clsx(styles['navigation__item'])

  const onClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation()
    onClick(event)
  }

  return (
    <>
      {destination && (
        <Link to={destination} className={classes}>
          {label}
        </Link>
      )}

      {onClick && (
        <Button onClick={onClickHandler} className={classes}>
          <Icon alt='' icon={icon} />
        </Button>
      )}
    </>
  )
}
