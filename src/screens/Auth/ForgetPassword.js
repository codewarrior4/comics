import { Dimensions, ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { Container,Header,Body,Title, Text, Button,Item,Input,Icon, Label, ListItem, CheckBox } from 'native-base';
import React,{useState} from 'react';
import {Auth}  from '../styles/Auth';

export default function ForgetPassword({navigation}) {
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
                <Text style={Auth.welcome}>Forgot Password</Text>
                <Text style={{marginTop:10}}>Enter  email to restore your lost password</Text>
                <View style={Auth.form,{marginTop:20}}>
                    <Item floatingLabel style={{borderColor:'red'}}>
                        <Icon type='FontAwesome5' name='envelope' />
                        <Label>Email</Label>
                        <Input 
                         keyboardType='email-address'
                        
                         />
                    </Item>

                <View
                    style={{
                        height:100,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <Button rounded style={Auth.loginBtn}>
                        <Text>Restore Password</Text>
                    </Button>
                </View>

                </View>
            </View>
        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({})