import { City, Dollar, Euro, Globe, Pound, Translate } from 'iconoir-react'
import React, { useMemo } from 'react'

import { Flex, Heading, Typography } from '@components'
import { ICountry, ICountryLanguage } from '@typings'

import styles from './country.module.scss'

interface ICountryProps {
  country: ICountry
}

const getCurrencySymbol = (currency: string) => {
  switch (currency) {
    case 'EUR':
      return <Euro />
    case 'GBP':
      return <Pound />
    default:
      return <Dollar />
  }
}

export const Country = ({ country }: ICountryProps) => {
  const renderNative = useMemo(() => {
    if (country.name === country.native) {
      return null
    }

    return `(${country.native})`
  }, [country])

  if (!country) {
    return null
  }

  return (
    <Flex column className={styles['country']} gap={1}>
      <Typography size='5xl'>{country?.emoji}</Typography>
      <Heading level={2}>
        {country?.name} {renderNative}
      </Heading>

      <Flex gap={4}>
        <Globe />
        {country?.continent?.name}
      </Flex>

      <Flex gap={4}>
        <City />
        {country?.capital || 'Unknown'}
      </Flex>

      <Flex gap={4}>
        <Translate />
        {country?.languages
          ?.map((language: ICountryLanguage) => language.name)
          ?.join(', ')}
      </Flex>

      <Flex gap={4} alignItems={'center'}>
        {getCurrencySymbol(country?.currency)}
        {country?.currency}
      </Flex>
    </Flex>
  )
}
