import clsx from 'clsx'
import React from 'react'

import styles from './content-card.module.scss'

interface IContentCardProps {
  children: React.ReactNode
}

export const ContentCard = ({ children }: IContentCardProps) => {
  const classes = clsx(styles['content-card'])

  return <div className={classes}>{children}</div>
}
