import * as React from 'react'

interface IVisuallyHidden {
  Component?: React.ElementType

  [x: string]: any
}

export const VisuallyHidden = ({
  Component = 'span',
  ...props
}: IVisuallyHidden) => <Component {...props} className='sr-only' />
