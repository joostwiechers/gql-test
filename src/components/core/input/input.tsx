import clsx from 'clsx'
import * as React from 'react'
import { forwardRef, useMemo } from 'react'
import { FieldError } from 'react-hook-form'

import { Flex, Label } from '@components'

import styles from './input.module.scss'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  removeMargin?: boolean
  prepend?: React.ReactNode
  append?: React.ReactNode
  error?: FieldError
}

export const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      type = 'text',
      onChange,
      placeholder,
      onKeyDown,
      onBlur,
      id,
      label,
      removeMargin,
      prepend,
      append,
      error,
      ...props
    }: IInput,
    ref
  ) => {
    const classes = clsx(
      styles['input'],
      styles[`input--${type}`],
      error && styles['input--error'],
      removeMargin && styles['input--no-margin']
    )

    const errorId = `${id}-error`

    const renderInput = useMemo(() => {
      return (
        <input
          className={classes}
          placeholder={placeholder}
          type={type}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={(event) => onKeyDown && onKeyDown(event)}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
      )
    }, [classes, placeholder, type, id, onChange, onBlur, onKeyDown, props])

    const renderFullInput = useMemo(() => {
      if (!prepend && !append) {
        return renderInput
      }

      return (
        <Flex gap={2} alignItems='center'>
          {prepend}
          {renderInput}
          {append}
        </Flex>
      )
    }, [renderInput, prepend, append])

    return (
      <Flex column gap={1}>
        {label && <Label htmlFor={id}>{label}</Label>}
        {renderFullInput}
        {error?.message && (
          <span className={styles['input__error-label']} id={errorId}>
            {error.message}
          </span>
        )}
      </Flex>
    )
  }
)
