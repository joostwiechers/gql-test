import { gql } from '@apollo/client'

const GET_POKEMON_SPECIES = gql(`

  query PokemonSpecies($where: pokemonspecies_bool_exp = {}) {
    species: pokemonspecies(
      where: $where
      order_by: {id: asc}
    ) {
      name
      id
      
      pokemoncolor {
        id
        name
      }
    }

    colors: pokemoncolor {
      name
      id
    }
  }
`)

export const QUERIES = {
  GET_POKEMON_SPECIES,
}
