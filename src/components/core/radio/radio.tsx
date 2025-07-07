import * as React from 'react'
import { forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

import { Flex, Label } from '@components'

import styles from '../input/input.module.scss'

interface IRadio extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string
  label: string
  name: string
  value: string | number
  error?: FieldError
}

export const Radio = forwardRef<HTMLInputElement, IRadio>(
  (
    { defaultChecked, onClick, id, label, name, value, error, ...rest }: IRadio,
    ref
  ) => {
    const errorId = error ? `${id}-error` : undefined
    return (
      <Flex column gap={1}>
        <Label htmlFor={id}>
          <input
            name={name}
            type='radio'
            id={id}
            onClick={(event) => onClick && onClick(event)}
            defaultChecked={defaultChecked}
            ref={ref}
            value={value}
            aria-describedby={errorId}
            aria-invalid={!!error}
            {...rest}
          />
          {label}
        </Label>

        {error?.message && (
          <span className={styles['input__error-label']} id={errorId}>
            {error.message}
          </span>
        )}
      </Flex>
    )
  }
)
