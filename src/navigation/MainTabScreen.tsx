/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeStackScreen from './HomeStackScreen';
import MyClosetStackScreen from './MyClosetStackScreen';
import ShareStackScreen from './ShareStackScreen';
//import AddItemStackScreen from './AddItemStackScreen';
import ProfileStackScreen from './ProfileStackScreen';
import DonateStackScreen from './DonateStackScreen';
import MoreStackScreen from './MoreStackScreen';

import { MainTabStackParamList, Routes } from '../../types';

const MainTabStack = createMaterialBottomTabNavigator<MainTabStackParamList>();

const MainTabScreen = () => {
  return (
    <MainTabStack.Navigator initialRouteName="Home" activeColor="#fff">
      <MainTabStack.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#FF6347',
          tabBarIcon: ({ color }) => <Ionicons name="ios-home" color={color} size={26} />,
        }}
      />
      <MainTabStack.Screen
        name="My Closet"
        component={MyClosetStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#FF6347',
          tabBarIcon: ({ color }) => <Ionicons name="ios-home" color={color} size={26} />,
        }}
      />
      <MainTabStack.Screen
        name={Routes.ShareStackScreen}
        component={ShareStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => <Ionicons name="ios-notifications" color={color} size={26} />,
        }}
      />
      <MainTabStack.Screen
        name={Routes.ProfileStackScreen}
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => <Ionicons name="ios-person" color={color} size={26} />,
        }}
      />

      <MainTabStack.Screen
        name={Routes.DonateStackScreen}
        component={DonateStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => <Ionicons name="ios-aperture" color={color} size={26} />,
        }}
      />
      <MainTabStack.Screen
        name={Routes.MoreStackScreen}
        component={MoreStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => <Ionicons name="ios-aperture" color={color} size={26} />,
        }}
      />
    </MainTabStack.Navigator>
  );
};

export default MainTabScreen;
