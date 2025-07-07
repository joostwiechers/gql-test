import clsx from 'clsx'
import * as React from 'react'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

import styles from './button.module.scss'

interface IButton {
  onClick?: (event: React.MouseEvent) => void
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'pill' | 'inline-input' | 'submit'
  to?: string
  disabled?: boolean
  active?: boolean

  [x: string]: any
}

export const Button = ({
  onClick,
  children,
  className,
  variant,
  disabled,
  active = false,
  ...props
}: IButton) => {
  const Component = props.to ? Link : 'button'

  const clickHandler = (event: React.MouseEvent) => {
    if (!onClick) {
      return
    }

    onClick(event)
  }

  const buttonProps = useMemo(() => {
    if (props.to) {
      return null
    }

    return {
      type: variant === 'submit' ? 'submit' : 'button',
      ...props,
    }
  }, [])

  const classes = clsx(
    styles['button'],
    variant && styles[`button--${variant}` as keyof typeof styles],
    active && styles[`button--active`],
    className
  )

  return (
    // @ts-ignore
    <Component
      onClick={clickHandler}
      className={classes}
      disabled={disabled}
      {...props}
      {...buttonProps}
    >
      {children}
    </Component>
  )
}
