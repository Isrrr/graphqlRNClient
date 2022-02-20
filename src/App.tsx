import React, { useState, useEffect } from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { NavigationContainer } from '@react-navigation/native'
import { AppNavigation } from './navigation'
import { ActivityIndicator } from 'react-native'
import { persistCache } from 'apollo3-cache-persist'
import AsyncStorage from '@react-native-community/async-storage'

const cache = new InMemoryCache()
const BASE_URL = 'https://api.spacex.land/graphql/' // 'https://48p1r2roz4.sse.codesandbox.io'

const client = new ApolloClient({
  uri: BASE_URL,
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    }
  }
})

const App = () => {
  const [loadingCache, setLoadingCache] = useState(true)

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage
    }).then(() => setLoadingCache(false))
  }, [])

  if (loadingCache) {
    return <ActivityIndicator size="large" />
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </ApolloProvider>
  )
}

export default App
