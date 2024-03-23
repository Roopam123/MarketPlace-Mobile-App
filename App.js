import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './Apps/Screens/Login/Login';
import {NavigationContainer} from '@react-navigation/native'
import TabNavigations from './Apps/Navigations/TabNavigations/TabNavigations';

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigations/>
    </NavigationContainer>
  )
}

export default App;