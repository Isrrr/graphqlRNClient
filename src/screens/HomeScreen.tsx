import { gql, useQuery } from '@apollo/client'
import React from 'react'
import {
  SafeAreaView,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Button
} from 'react-native'

const RATES = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
    }
  }
`

export const HomeScreen = ({ navigation }: any) => {
  const { data, loading } = useQuery(RATES)

  return (
    <SafeAreaView>
      <Button
        title="Go to spacex screen!"
        onPress={() => navigation.navigate('Space')}
      />

      {!loading ? (
        <FlatList
          data={data.rates}
          keyExtractor={item => item.currency}
          renderItem={({ item }) => {
            return (
              <>
                <Text style={styles.text}>{item.currency}</Text>
              </>
            )
          }}
        />
      ) : (
        <ActivityIndicator style={styles.indicator} size="large" />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: { textAlign: 'center' },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
})
