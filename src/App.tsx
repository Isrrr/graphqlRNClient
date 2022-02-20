import React from 'react';
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache(),
  });

  client
    .query({
      query: gql`
        query GetRates {
          rates(currency: "USD") {
            currency
          }
        }
      `,
    })
    .then(res => console.log(res));

  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Tratata</Text>
    </SafeAreaView>
  );
};

export default App;
