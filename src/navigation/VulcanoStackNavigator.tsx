import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {VulcanoStackParamList} from './NavigationTypes';
import {Vulcano} from '../screens';
import {Colors} from '../constants';

const VulcanoStack = createStackNavigator<VulcanoStackParamList>();

const VulcanoStackNavigator = () => (
  <VulcanoStack.Navigator
    screenOptions={{
      headerShown: true,
      title: 'Aloha',
      headerTitleAlign: 'center',
    }}>
    <VulcanoStack.Screen name="Vulcano" component={Vulcano} />
  </VulcanoStack.Navigator>
);

export default VulcanoStackNavigator;
