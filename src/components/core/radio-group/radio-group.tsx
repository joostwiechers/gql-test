import clsx from 'clsx'
import React from 'react'

import styles from './radio-group.module.scss'

interface IRadioGroup {
  children: React.ReactNode
  error?: { message?: string }
  label?: string
}

export const RadioGroup = ({ children, error, label }: IRadioGroup) => {
  const classes = clsx(styles['radio-group'])

  return (
    <fieldset className={classes}>
      {label && <legend>{label}</legend>}
      {children}
      {error?.message && (
        <span className={styles['radio-group__error-label']}>{error.message}</span>
      )}
    </fieldset>
  )
}
