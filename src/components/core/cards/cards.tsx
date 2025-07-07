import clsx from 'clsx'
import * as React from 'react'

import styles from './cards.module.scss'

interface ICards {
  children?: React.ReactNode
}

export const Cards = ({ children }: ICards) => {
  const classes = clsx(styles['cards'])
  return <section className={classes}>{children}</section>
}
