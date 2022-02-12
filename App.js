import React from 'react';
import {Text,useColorScheme, View,} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Root } from "native-base";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Auth/Login';
import Register from './src/screens/Auth/Register';
import ForgetPassword from './src/screens/Auth/ForgetPassword';
import Home from './src/screens/Pages/Home';
import Tabs from './src/screens/Utils/Tabs';


const App = () => {

  const RootStack = createNativeStackNavigator()
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Root style={backgroundStyle}>
      <NavigationContainer>
        <RootStack.Navigator
          
        initialRouteName = "Login">

          <RootStack.Screen name="Login" options={{headerShown:false}} component={Login} />
          <RootStack.Screen name="Main" options={{headerShown:false}} component={Tabs} />
          <RootStack.Screen name="Register" options={{
            title:'',
            headerTintColor:'white',
            headerStyle:{
              backgroundColor:'#aa0012',
            }
          }} component={Register} />
          <RootStack.Screen
            options={{
              title:'',
              headerTintColor:'white',
              headerStyle:{
                backgroundColor:'#aa0012',
              }
            }}
          name="ForgetPassword" component={ForgetPassword} />

        </RootStack.Navigator>
      </NavigationContainer>
    </Root>
    
  );
}

export default App;
