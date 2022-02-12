import { Dimensions, ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { Container,Header,Body,Title, Text, Button,Item,Input,Icon, Label, ListItem, CheckBox } from 'native-base';
import React,{useState} from 'react';
import {Auth}  from '../styles/Auth';

export default function Log({navigation}) {
const [data,setData]=useState({email:'','password':''})

  return (
    <ScrollView
        style={{flex:1,backgroundColor:"#fff",}}
        showsVerticalScrollIndicator={false}
    >
        <ImageBackground 
            source={require('./../../images/images.png')}
            style={{
                backgroundColor:"red",
                height:Dimensions.get('window').height/2.5
            }}
        >
            <View style={Auth.brandView} >
                <Icon name='location-sharp'
                    style={{color:"#fff",fontSize:100 }}
                />
                <Text style={Auth.barndViewText}>Marvel Comics</Text>
            </View>
        </ImageBackground>

        <View style={Auth.bottomView}>
            <View style={{padding:40}}>
                <Text style={Auth.welcome}>Welcome Back</Text>
                <Text>Don't have an account ?
                    <Text style={Auth.subText}
                        onPress={()=>{navigation.navigate('Register')}}
                    >Register now</Text>
                </Text>
                <View style={Auth.form}>
                    <Item floatingLabel style={{borderColor:'red'}}>
                        <Icon type='FontAwesome5' name='envelope' />
                        <Label>Email</Label>
                        <Input 
                         keyboardType='email-address'
                        
                         />
                    </Item>
                    <Item floatingLabel style={{borderColor:'red',marginTop:20}}>
                        <Icon name='eye' />
                        <Label>Password</Label>
                        <Input 
                            secureTextEntry={true}
                         />
                    </Item>
                </View>

                <View style={Auth.forgotPasswordView}>
                    <View style={{flex:1,marginLeft:-20}}>
                        <ListItem noBorder>
                            <CheckBox checked={true} color="red" />
                            <Body>
                                <Text style={Auth.subText,{alignSelf:'flex-start'}}>Remember me</Text>
                            </Body>
                        </ListItem>
                    </View>
                    <View style={{flex:1}}>
                        <ListItem noBorder>
                            <Body>
                                <Text style={Auth.subText,{alignSelf:'flex-end'}} onPress={()=>navigation.navigate('ForgetPassword')}>Forgot Password</Text>
                            </Body>
                        </ListItem>
                    </View>
                </View>
                <View
                    style={{
                        height:100,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <Button rounded style={Auth.loginBtn}
                        onPress={()=>{navigation.navigate('Main')}}
                    >
                        <Text>Login</Text>
                    </Button>
                </View>

            </View>
        </View>

    </ScrollView>
  )
}
