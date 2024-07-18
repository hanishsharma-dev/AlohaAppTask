import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {SurfingStackParamList} from './NavigationTypes';
import {Surfing} from '../screens';
import {Colors} from '../constants';

const SurfingStack = createStackNavigator<SurfingStackParamList>();

const SurfingStackNavigator = () => (
  <SurfingStack.Navigator
    screenOptions={{
      headerShown: true,
      title: 'Aloha',
      headerTitleAlign: 'center',
    }}>
    <SurfingStack.Screen name="Surfing" component={Surfing} />
  </SurfingStack.Navigator>
);

export default SurfingStackNavigator;
