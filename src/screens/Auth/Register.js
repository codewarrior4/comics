import { Dimensions, ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { Text, Button,Item,Input,Icon, Label, ListItem, CheckBox } from 'native-base';
import React,{useState} from 'react';
import {Auth}  from './../styles/Auth';

export default function Register({navigation}) {
const [data,setData]=useState({fullname:"",email:'','password':''})

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
                <Text style={Auth.welcome}>Register</Text>
                <Text>Already Have an account ?
                    <Text style={Auth.subText}
                        onPress={()=>{navigation.navigate('Login')}}
                    >Login</Text>
                </Text>
                <View style={Auth.form}>
                    <Item floatingLabel style={{borderColor:'red'}}>
                        <Icon name='person' />
                        <Label>Full Name</Label>
                        <Input 
                         keyboardType='default'
                        
                         />
                    </Item>
                    <Item floatingLabel style={{borderColor:'red',marginTop:20}}>
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
                <View
                    style={{
                        height:100,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <Button rounded style={Auth.loginBtn}>
                        <Text>Register</Text>
                    </Button>
                </View>

            </View>
        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({})