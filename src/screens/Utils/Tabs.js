import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

import Login from './src/screens/Auth/Login';

// export default function Tabs() {

// const Tab = createBottomTabNavigator();

//   return (
//     <Tab.Navigator
//       screenOptions={
//         ({route})=>({
//           tabBarIcon:({focused,size,color})=>{
//             let iconName;
//             if(route.name ==='Home'){
//               iconName ='clipboard-list',
//               size = focused ? 25:20
//             }else if(route.name ==='Done'){
//               iconName ='clipboard-check',
//               size = focused ? 25:20
//             }

//             return (
//               <FontAwesome5 name={iconName}
//               size={size}
//               color={color} />
//             )
//           }
//         })
//       }
      
//     >
//       <Tab.Screen name={'Home'} options={{headerShown:false}} component={Home} />
//     </Tab.Navigator>
//   );
// }



export default function Stacks(){
    const RootStack = createNativeStackNavigator()
    return(
        <RootStack.Navigator initialRouteName = "Login">
            <RootStack.Screen name="Login" options={{headerShown:false}} component={Login} />
        </RootStack.Navigator>
    )
}
