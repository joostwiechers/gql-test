import React from 'react'

import { Cards } from '@components'
import { ICountry } from '@typings'

import { Country } from '../country/country'

export interface ICountriesProps {
  countries?: ICountry[]
}

export const Countries = ({ countries }: ICountriesProps) => {
  return (
    <Cards>
      {countries?.map((country: ICountry) => (
        <Country key={country.code} country={country} />
      ))}
    </Cards>
  )
}
