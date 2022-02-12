import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const Auth = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        fontFamily:'Quintessential-Regular',
        fontSize:60,
        fontWeight:'bold',
        color:'#FF6464',
        paddingBottom:30
    },
    loginButton:{
        marginHorizontal:15,
        marginVertical:15,
        borderRadius:5,
        height:50,
        borderWidth:10

    },
    loginText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FF6464', 
        paddingHorizontal:20
    },
    regButton:{
        marginHorizontal:15,
        marginVertical:15,
        borderRadius:5,
        height:50,
        backgroundColor:'#FF6464'

    },
    regText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff', 
        paddingHorizontal:20
    },

    backButton:{
        position:'absolute',
        top:3,
        left:3
    },
    bgRed:{
        backgroundColor:'#FF6464'
    },
    subText:{
        fontSize:15,
        color:'red',
        fontWeight:'bold',
        fontStyle:'italic',

    },
    brandView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    barndViewText:{
        color:'#fff',
        fontSize:40,
        fontWeight:'bold',
        textTransform:'uppercase'
    },
    bottomView:{
        flex:1.5,
        backgroundColor:'white',
        bottom:50,
        borderTopStartRadius:60,
        borderTopEndRadius:60
    },
    welcome:{
        color:"blue",
        fontSize:34
    },
    form:{
        marginTop:50
    },
    forgotPasswordView:{
        height:50,
        marginTop:20,
        flexDirection:'row',
    },
    loginBtn:{
        alignSelf:'center',
        backgroundColor:'red',
        width:Dimensions.get('window').width /2,
        justifyContent:'center',
        elevation:5
    }


});
