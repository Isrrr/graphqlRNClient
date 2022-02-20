import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native'

const RATES = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
    }
  }
`

export const HomeScreen = () => {
  const { data, loading } = useQuery(RATES)

  return (
    <SafeAreaView>
      {!loading ? (
        <FlatList
          data={data.rates}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <>
                <Text style={{ textAlign: 'center' }}>{item.currency}</Text>
              </>
            )
          }}
        />
      ) : (
        <ActivityIndicator
          style={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center'
          }}
          size="large"
        />
      )}
    </SafeAreaView>
  )
}
