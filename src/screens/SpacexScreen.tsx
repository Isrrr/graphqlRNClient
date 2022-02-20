import { gql, useQuery } from '@apollo/client'
import React from 'react'
import {
  SafeAreaView,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button
} from 'react-native'

const SPACEX = gql`
  query GetInfo {
    company {
      ceo
    }
    roadster {
      details
    }
  }
`

export const SpacexScreen = ({ navigation }: any) => {
  const { data, loading } = useQuery(SPACEX)

  return (
    <SafeAreaView>
      <Button
        title="Go to home screen!"
        onPress={() => navigation.navigate('Home')}
      />

      {!loading ? (
        <>
          <Text style={styles.text}>{data.company.ceo}</Text>
          <Text style={styles.text}> {data.roadster.details}</Text>
        </>
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
