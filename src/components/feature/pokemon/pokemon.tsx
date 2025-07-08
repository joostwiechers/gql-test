import { ColorWheel } from 'iconoir-react'
import React, { useEffect, useMemo } from 'react'

import { useQuery } from '@apollo/client'
import { Button, Cards, Checkbox, Flex, Heading, Typography } from '@components'
import { QUERIES } from '@constants'

import { ContentCard } from '../content-card/content-card'

export const Pokemon = () => {
  const [color, setColor] = React.useState(null)
  const [mythical, setMythical] = React.useState(false)
  const [legendary, setLegendary] = React.useState(false)

  const variables = useMemo(() => {
    const where = {
      // generation: { name: { _eq: 'generation-iii' } },
    }

    if (mythical) {
      where.is_mythical = { _eq: mythical }
    }

    if (legendary) {
      where.is_legendary = { _eq: legendary }
    }

    if (color !== null) {
      where.pokemoncolor = { id: { _eq: color } }
    }

    console.log({ where })

    return { where }
  }, [color, legendary, mythical])

  const { data, loading, error, refetch } = useQuery(QUERIES.GET_POKEMON_SPECIES, {
    variables,
  })

  useEffect(() => {
    refetch(variables)
  }, [variables])

  const renderPokemonColors = useMemo(() => {
    if (!data?.colors) {
      return null
    }

    return data?.colors?.map((_color: any) => (
      <Button
        variant='pill'
        active={_color.id === color}
        onClick={() => setColor(_color.id)}
        key={_color.id}
      >
        {_color.name}
      </Button>
    ))
  }, [data])

  const renderPokemon = useMemo(() => {
    if (!data?.species) {
      return null
    }
    return data?.species.map((pokemon: any) => (
      <ContentCard key={pokemon.id}>
        <Flex column gap={4}>
          <Flex justifyContent='between' alignItems='center'>
            <Heading level={2}>{pokemon.name}</Heading>
            <Typography>#{pokemon.id}</Typography>
          </Flex>

          <Flex gap={4} alignItems='center'>
            <ColorWheel />{' '}
            <span
              role='button'
              tabIndex={0}
              onClick={() => setColor(pokemon.pokemoncolor.id)}
            >
              {pokemon.pokemoncolor.name}
            </span>
          </Flex>
        </Flex>
      </ContentCard>
    ))
  }, [data])

  return (
    <Flex column gap={4}>
      <Flex gap={2}>
        <Checkbox
          id={'legendary'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLegendary(e.target.checked)
          }
          label='Legendary pokemon'
          value=''
          disabled={mythical}
        />

        <Checkbox
          id={'mythical'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMythical(e.target.checked)
          }
          label='Mythical pokemon'
          value=''
          disabled={legendary}
        />
      </Flex>

      <Flex gap={2}>{renderPokemonColors}</Flex>

      <Cards>{renderPokemon}</Cards>
    </Flex>
  )
}
