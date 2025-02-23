import {Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import IMAGES from '../utils/ImagePath';
import Profile from '../screen/Profile';
import Orders from '../screen/Orders';
import SCREEN_NAMES from '../utils/ScreenNames';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={SCREEN_NAMES.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={{height: '30px', width: '30px'}}
              source={IMAGES.HOME}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.PROFILE}
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={{height: '30px', width: '30px'}}
              source={IMAGES.PROFILE}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.ORDERS}
        component={Orders}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={{height: '30px', width: '30px'}}
              source={IMAGES.SHOPPING_BAG}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
