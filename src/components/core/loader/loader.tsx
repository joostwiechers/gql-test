import clsx from 'clsx'
import * as React from 'react'

import styles from './loader.module.scss'

export const Loader = () => {
  const classes = clsx(styles['loader'])
  return (
    <div className={classes}>
      <span />
    </div>
  )
}
