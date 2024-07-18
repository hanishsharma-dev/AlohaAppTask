import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from './NavigationTypes';
import MainTabNavigator from './MainTabNavigator';

const RootStack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="Main">
      <RootStack.Screen
        name="Main"
        component={MainTabNavigator}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
