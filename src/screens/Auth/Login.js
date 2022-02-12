import { StyleSheet, View } from 'react-native';
import { Container, Text, Button } from 'native-base';
import React from 'react';
import {Auth}  from './../styles/Auth';

const Login = ({navigation}) => {

  return (
    <>
        <Container style={Auth.container}>
            <View>
                <Text style={Auth.logo}>Marvel comics</Text>
            </View>
            <View>
              <Text>The easiest way to start your amazing application</Text>
            </View>
            <Button block bordered 
              style={Auth.loginButton} 
              onPress={()=>{navigation.replace('Log')}}
            >
              <Text style={Auth.loginText}>Login</Text>
            </Button>
            
            <Button block
             style={Auth.regButton}
             onPress={()=>{navigation.replace('Register')}} 
            >
              <Text style={Auth.regText}>Register</Text>
            </Button>
            
        </Container>
    </>
  );
}


export default Login;
