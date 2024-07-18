import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {HomeStackParamList} from './NavigationTypes';
import {Home} from '../screens';
import {Colors} from '../constants';

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: true,
      title: 'Aloha',
      headerTitleAlign: 'center',
    }}>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{headerLeft: null}}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
