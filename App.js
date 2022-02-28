import React,{useEffect,useState} from 'react';
import {Text,useColorScheme, View} from 'react-native';
import { Root } from "native-base";
import AppRoot from './AppRoot';
import AuthProvider from './provider/AuthProvider';


const App = () => {

  return (
    <AuthProvider>
      <Root>
        <AppRoot />
      </Root>
    </AuthProvider>
    
    
  );
}

export default App;
