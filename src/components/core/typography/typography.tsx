import clsx from 'clsx'
import * as React from 'react'
import { useMemo } from 'react'

import { TypographySizes } from '@typings'

import styles from './typography.module.scss'

interface ITypography {
  children: React.ReactNode
  element?: React.ElementType
  wysiwyg?: boolean
  size?: TypographySizes
  align?: 'left' | 'center' | 'right'
  weight?: 'normal' | 'bold'
}

export const Typography = ({
  children,
  element: Element = 'p',
  wysiwyg = false,
  size,
  weight,
  align,
}: ITypography) => {
  Element = useMemo(() => (wysiwyg ? 'div' : Element), [wysiwyg, Element])

  const classes = clsx(
    styles['typography' as keyof typeof styles],
    wysiwyg && styles[`typography--wysiwyg` as keyof typeof styles],
    size && styles[`typography--size-${size}` as keyof typeof styles],
    align && styles[`typography--align-${align}` as keyof typeof styles],
    weight && styles[`typography--weight-${weight}` as keyof typeof styles]
  )

  return <Element className={classes}>{children}</Element>
}
