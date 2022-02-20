import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../screens/HomeScreen'

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
    </BottomMenuStack.Navigator>
  )
}
