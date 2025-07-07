import clsx from 'clsx'
import * as React from 'react'

import styles from './grid.module.scss'

interface IGrid {
  children: React.ReactNode
  item?: boolean
  flex?: boolean
  width?: number
  margin?: 'bottom' | 'top' | 'left' | 'right' | 'all' | true
}

export const Grid = ({
  children,
  item = false,
  flex = false,
  width,
  margin,
}: IGrid) => {
  const baseClass = item ? 'grid__item' : 'grid'

  const classes = clsx(
    styles[baseClass],
    width && styles[`${baseClass}--${width}`],
    flex && styles[`${baseClass}--flex`],
    margin && styles[`${baseClass}--margin-${margin !== true ? margin : 'all'}`]
  )

  return <section className={classes}>{children}</section>
}
