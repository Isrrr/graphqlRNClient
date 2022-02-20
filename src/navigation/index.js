import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/HomeScreen'
import { SpacexScreen } from '../screens/SpacexScreen'

const BottomMenuStack = createNativeStackNavigator()

export const AppNavigation = () => {
  return (
    <BottomMenuStack.Navigator>
      <BottomMenuStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />
      <BottomMenuStack.Screen
        name="Space"
        component={SpacexScreen}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />
    </BottomMenuStack.Navigator>
  )
}
