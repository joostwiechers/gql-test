import clsx from 'clsx'
import { motion } from 'motion/react'
import * as React from 'react'

import styles from './container.module.scss'

interface IContainer {
  children: React.ReactNode
  small?: boolean
}

export const Container = ({ children, small = false }: IContainer) => {
  const classes = clsx(styles['container'], small && styles['container--small'])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes}
    >
      {children}
    </motion.div>
  )
}
