import clsx from 'clsx'
import * as React from 'react'

import styles from './icon.module.scss'

interface IIcon {
  icon: string
  alt?: string
  spins?: boolean
  className?: string
}

export const Icon = ({ icon, alt = '', spins = false, className }: IIcon) => {
  const classes = clsx(styles['icon'], spins && styles['icon--spins'], className)

  return <img className={classes} src={icon} alt={alt} />
}
