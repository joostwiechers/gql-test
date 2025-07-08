import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { App } from './app'
import './style.scss'

const client = new ApolloClient({
  uri: 'https://graphql.pokeapi.co/v1beta2',
  cache: new InMemoryCache(),
})

const element = document.getElementById('app')
const root = createRoot(element)
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
)
