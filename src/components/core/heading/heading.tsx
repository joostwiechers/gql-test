import * as React from 'react'
import { useMemo } from 'react'

interface IHeading {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
}

export const Heading = ({ level = 2, children }: IHeading) => {
  const Element = useMemo(() => `h${level}`, [level])

  // @ts-ignore
  return <Element>{children}</Element>
}
