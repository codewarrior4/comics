import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Defaults(){
    const getData = async () =>{
        const value = await AsyncStorage.getItem('user')
        console.log(value)
        // if (value == null){
        //    return 'Main';
        // } else{
        //    return 'Main';
        // }
    }
}
