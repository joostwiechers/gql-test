import * as React from 'react'

interface ILabel {
  children: React.ReactNode
  htmlFor: string

  [x: string]: any
}

export const Label = ({ children, htmlFor, ...props }: ILabel) => {
  return (
    <label {...props} htmlFor={htmlFor}>
      {children}
    </label>
  )
}
