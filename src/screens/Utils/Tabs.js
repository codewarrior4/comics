import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

import Home from './../Pages/Home'
import Profile from './../Pages/Profile'
import Search from './../Pages/Search'

export default function Tabs() {

const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={
        ({route})=>({
          tabBarIcon:({focused,size,color})=>{
            let iconName;
            if(route.name ==='Home'){
              iconName ='home',
              size = focused ? 25:20
            }else if(route.name ==='Search'){
              iconName ='search',
              size = focused ? 25:20
            }else if(route.name ==='Profile'){
              iconName ='user',
              size = focused ? 25:20
            }

            return (
              <FontAwesome5 name={iconName}
              size={size}
              color={color} />
            )
          }
        })
      }
      
    >
      <Tab.Screen  name={'Home'} options={{headerShown:false,tabBarActiveTintColor:'red',tabBarInactiveTintColor:'#FF6464'}} component={Home} />
      <Tab.Screen name={'Search'} options={{headerShown:false,tabBarActiveTintColor:'red',tabBarInactiveTintColor:'#FF6464'}} component={Search} />
      <Tab.Screen name={'Profile'} options={{headerShown:false,tabBarActiveTintColor:'red',tabBarInactiveTintColor:'#FF6464'}} component={Profile} />
    </Tab.Navigator>
  );
}

