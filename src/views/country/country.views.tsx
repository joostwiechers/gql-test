import React, { useMemo } from 'react'

import { useQuery } from '@apollo/client'
import { Container, Country, Flex, Input, Loader } from '@components'
import { QUERIES } from '@constants'

export const CountryView = () => {
  const [searchQuery, setSearchQuery] = React.useState('')

  const [code, setCode] = React.useState('NL')

  const { loading, error, data } = useQuery(QUERIES.GET_COUNTRY, {
    variables: { code },
  })

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    setCode(searchQuery)
  }

  const renderCountry = useMemo(() => {
    if (loading) {
      return <Loader />
    }

    if (!data || !data.country) {
      return 'Invalid country code or country not found.'
    }

    return <Country country={data?.country} />
  }, [data])

  return (
    <Container>
      <Flex column gap={4}>
        <form onSubmit={submitHandler}>
          <Input
            label='Country code'
            placeholder={'e.g. NL'}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        {renderCountry}
      </Flex>
    </Container>
  )
}
