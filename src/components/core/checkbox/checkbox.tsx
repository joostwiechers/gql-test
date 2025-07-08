import * as React from 'react'
import { forwardRef } from 'react'

import { Label } from '@components'

interface ICheckbox {
  defaultChecked?: boolean
  onChange?: (event: React.ChangeEvent) => void
  id: string
  label: string
  name?: string
  checked?: boolean
  value: string
  disabled?: boolean

  [x: string]: any
}

export const Checkbox = forwardRef(
  (
    {
      defaultChecked,
      onChange,
      id,
      label,
      name,
      checked,
      value,
      disabled,
      props,
    }: ICheckbox,
    ref
  ) => {
    return (
      <Label htmlFor={id}>
        <input
          name={name}
          type='checkbox'
          id={id}
          defaultChecked={defaultChecked}
          checked={checked}
          onChange={(event) => onChange && onChange(event)}
          ref={ref}
          value={value}
          disabled={disabled}
          {...props}
        />
        {label}
      </Label>
    )
  }
)
