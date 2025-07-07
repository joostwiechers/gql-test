import { gql } from '@apollo/client'

const GET_CONTINENTS = gql(`
  query Continents {
    continents {
      code,
      name
    }
  }
`)

const GET_COUNTRIES = gql(`
  query Countries {
    countries {
      code
      name
      native
      capital
      phone
      continent {
        name
        code
      }
      currency
      languages {
        name
      }
      emoji
      states {
        name
      }
    }
  }
`)

const GET_COUNTRY = gql(`
  query Country($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      emoji
      currency
      continent {
        name
      }
      languages {
        code
        name
      }
    }
  }
`)

const GET_COUNTRY_BY_CONTINENT = gql(`
  query CountryByContinent($code: ID!) {
    continent(code: $code) {
      name
      countries {
        continent {
          name
        }
        code
        name
        native
        capital
        emoji
        currency
        languages {
          code
          name
        }
      }
    }
  }
`)

export const QUERIES = {
  GET_CONTINENTS,
  GET_COUNTRIES,
  GET_COUNTRY,
  GET_COUNTRY_BY_CONTINENT,
}
