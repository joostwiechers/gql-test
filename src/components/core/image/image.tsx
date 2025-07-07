import clsx from 'clsx'
import * as React from 'react'

import styles from './image.module.scss'

interface IImage {
  src: string
  alt?: string
}

export const Image = ({ src, alt = '' }: IImage) => {
  const classes = clsx(styles['image'])
  return <img className={classes} src={src} alt={alt} />
}
