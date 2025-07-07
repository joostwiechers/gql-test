import React from 'react'

import { useQuery } from '@apollo/client'
import { Button, Countries, Flex, Loader } from '@components'
import { QUERIES } from '@constants'

export const CountriesView = () => {
  const [continent, setContinent] = React.useState(null)

  const countries = useQuery(QUERIES.GET_COUNTRIES)
  const continents = useQuery(QUERIES.GET_CONTINENTS)

  const continentCountries = useQuery(QUERIES.GET_COUNTRY_BY_CONTINENT, {
    variables: { code: continent },
    skip: continent === null,
  })

  const _countries =
    continentCountries?.data?.continent?.countries ?? countries?.data?.countries

  if (!_countries) {
    return <Loader />
  }

  return (
    <Flex column gap={3}>
      <Flex gap={3}>
        {continents.data?.continents?.map((_continent: any) => (
          <Button
            variant='pill'
            onClick={() => setContinent(_continent.code)}
            key={_continent.code}
            active={continent === _continent.code}
          >
            {_continent.name}
          </Button>
        ))}
      </Flex>

      <Countries countries={_countries} />
    </Flex>
  )
}
