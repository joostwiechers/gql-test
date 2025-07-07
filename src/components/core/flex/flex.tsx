import clsx from 'clsx'
import { motion } from 'motion/react'
import * as React from 'react'

import { Spacings } from '@typings'

import styles from './flex.module.scss'

interface IFlex {
  children: React.ReactNode
  column?: boolean
  gap?: Spacings
  margin?: Spacings
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around'
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  alignSelf?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  wrap?: boolean
  grow?: boolean
  className?: string
  as?: React.ElementType
  mobileColumn?: boolean
}

export const Flex = React.forwardRef(
  (
    {
      children,
      column,
      gap,
      margin,
      justifyContent,
      alignItems,
      alignSelf,
      wrap,
      grow,
      as: Component = 'div',
      mobileColumn = false,
      className,
    }: IFlex,
    ref
  ) => {
    const _CLASSES = clsx(
      styles['flex'],
      column && styles['flex--column'],
      gap && styles[`flex--gap-${gap}`],
      margin && styles[`flex--margin-${margin}`],
      wrap && styles['flex--wrap'],
      grow && styles['flex--grow'],
      justifyContent && styles[`flex--justify-content-${justifyContent}`],
      alignItems && styles[`flex--align-items-${alignItems}`],
      alignSelf && styles[`flex--align-self-${alignSelf}`],
      mobileColumn && styles['flex--mobile-column'],
      className
    )

    return (
      // @ts-ignore
      <Component ref={ref} className={_CLASSES}>
        {children}
      </Component>
    )
  }
)

export const MotionFlex = motion.create(Flex, { forwardMotionProps: true })
