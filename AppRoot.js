import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Auth/Login';
import Register from './src/screens/Auth/Register';
import ForgetPassword from './src/screens/Auth/ForgetPassword';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage,{useAsyncStorage} from '@react-native-async-storage/async-storage';
import Tabs from './src/screens/Utils/Tabs';
import { AuthContext } from './provider/AuthProvider';

export default function AppRoot() {

  const {isLoggedIn,setIsLoggedIn} = React.useContext(AuthContext)
  const {getItem} = useAsyncStorage('@user');
  const [checking,setIsChecking] = React.useState(true)
  
  React.useEffect(()=>{
    const checkLoggedIn = async () =>{
      const item = await getItem();

      // check if logged in
      if(item !== null){
        setIsLoggedIn(true)
      }
      setIsChecking(false)
    }
    checkLoggedIn()
  })

  if(checking){
    return (
      <View style={styles.container}>
          <ActivityIndicator size={'large'} color={'#FF6464'} />
      </View>
    )
  }
  const RootStack = createNativeStackNavigator()
  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator>
          {isLoggedIn ? 
            (
              <RootStack.Screen name="Main" options={{headerShown:false}} component={Tabs} />
            ) : (

              <>
                <RootStack.Screen name="Login" options={{headerShown:false}} component={Login} />
                <RootStack.Screen name="Register" options={{
                  headerShown:false,
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
              </>
            )
          }

        </RootStack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})