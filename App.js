import React from 'react';
import {Text,useColorScheme, View,} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Root } from "native-base";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Auth/Login';
import Log from './src/screens/Auth/Log';


// import {Tabs,Stacks} from './src/screens/Utils/Tabs'

const App = () => {

  const RootStack = createNativeStackNavigator()
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // Tabs()
  return (
    <Root style={backgroundStyle}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName = "Log">

          <RootStack.Screen name="Login" options={{headerShown:false}} component={Login} />
          <RootStack.Screen name="Log" options={{headerShown:false}} component={Log} />

        </RootStack.Navigator>
      </NavigationContainer>
    </Root>
    
  );
}

export default App;
