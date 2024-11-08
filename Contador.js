import React, {useState} from 'react';
import { View , Text, StyleSheet, TouchableOpacity} from "react-native";
import { StatusBar } from 'expo-status-bar';

import {LinearGradient} from 'expo-linear-gradient';


export default function Contador(props){
    


    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <LinearGradient
                colors={['rgba(59,29,105,1)', 'rgba(59,29,105,0.6)']}
                style={{
                position:'absolute',
                left: 0,
                right:0,
                top:0,
                height:'100%'
                }} 
                />
            <View style={{flexDirection:'row'}}>
                <Text style={styles.TexContador}>{props.minutos} : </Text>
                <Text style={styles.TexContador}>{props.segundos}</Text>
            </View>
      <TouchableOpacity onPress={()=> props.setarEstado('Selecionar')} style={styles.btnIniciar}><Text style={{textAlign:'center',color:'white',fontSize:20}}>Resetar</Text></TouchableOpacity>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'rgb(80,50,168)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TexContador:{
        color:'white',
        fontSize:40
    },
    btnIniciar:{
      backgroundColor:'rgb(116,67,191)',
      width:100,
      height:100,
      borderRadius:50,
      marginTop:30,
      borderColor:'white',
      borderWidth:2,
      justifyContent:'center'
    },
  });