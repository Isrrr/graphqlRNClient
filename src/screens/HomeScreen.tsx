import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'

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
    <View>
      {loading ? (
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
        <ActivityIndicator size="large" />
      )}
    </View>
  )
}
