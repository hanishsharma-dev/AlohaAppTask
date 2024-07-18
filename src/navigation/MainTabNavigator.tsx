import React, {useLayoutEffect} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {MainTabParamList} from './NavigationTypes';
import VulcanoStackNavigator from './VulcanoStackNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import SurfingStackNavigator from './SurfingStackNavigator';
import HulaStackNavigator from './HulaStackNavigator';
import { Colors } from '../constants';

const MainTabNavigator = () => {
  const navigation = useNavigation();
  const state = useNavigationState(state => state);
  const MainTab = createBottomTabNavigator<MainTabParamList>();

  useLayoutEffect(() => {
    const parent = navigation.getParent();
    if (parent && state) {
      const currentTabState = state.routes[state.index].state;

      let shouldHideTabBar = false;

      if (currentTabState) {
        const currentTabIndex = (currentTabState as any).index;
        const currentTabRoute = (currentTabState as any).routes[
          currentTabIndex
        ];
        if (currentTabRoute.name === 'Profile' && currentTabRoute.state) {
          const profileStackState = currentTabRoute.state as any;
          if (profileStackState.index > 0) {
            shouldHideTabBar = true;
          }
        }
      }

      if (shouldHideTabBar) {
        parent.setOptions({tabBarStyle: {display: 'none'}});
      } else {
        parent.setOptions({tabBarStyle: {}});
      }
    }
  }, [navigation, state]);

  return (
    <MainTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = "home";

          if (route.name === 'HomeStackNavigator') {
            return <Icon name={"home"} size={size} color={color} />;
          } else if (route.name === 'SurfingStackNavigator') {
            return <Icon name={'surfing'} size={size} color={color} />;
          } else if (route.name === 'HulaStackNavigator') {
            return <Icon name={'glass-cocktail'} size={size} color={color} />;
          } else if (route.name === 'VulcanoStackNavigator') {
            return <Icon name={'image-filter-hdr'} size={size} color={color} />;
          }

          // You can return any component that you like here!
        },
        tabBarActiveTintColor: Colors.HIGHLIGHT_TITLE_COLOR,
        tabBarInactiveTintColor: Colors.BLACK_LABEL_COLOR,
      })}>
      <MainTab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{headerShown: false, title: 'Home'}}
      />
      <MainTab.Screen
        name="SurfingStackNavigator"
        component={SurfingStackNavigator}
        options={{headerShown: false, title: 'Surfing'}}
      />
      <MainTab.Screen
        name="HulaStackNavigator"
        component={HulaStackNavigator}
        options={{headerShown: false, title: 'Hula'}}
      />
      <MainTab.Screen
        name="VulcanoStackNavigator"
        component={VulcanoStackNavigator}
        options={{headerShown: false, title: 'Vulcano'}}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
