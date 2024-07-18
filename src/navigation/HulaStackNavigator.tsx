import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {HulaStackParamList} from './NavigationTypes';
import {Hula} from '../screens';
import {Colors} from '../constants';

const HulaStack = createStackNavigator<HulaStackParamList>();

const HulaStackNavigator = () => (
  <HulaStack.Navigator
    screenOptions={{
      headerShown: true,
      title: 'Aloha',
      headerTitleAlign: 'center',
    }}>
    <HulaStack.Screen name="Hula" component={Hula} />
  </HulaStack.Navigator>
);

export default HulaStackNavigator;
