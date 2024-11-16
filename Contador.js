import React, {useEffect, useState} from 'react';
import { View , Text, StyleSheet, TouchableOpacity} from "react-native";
import { StatusBar } from 'expo-status-bar';

import {LinearGradient} from 'expo-linear-gradient';


export default function Contador(props){
    
    var done = false;

    useEffect(()=>{
      const timer = setInterval(()=>{

        props.setarSegundos(props.segundos -1);

        if (props.segundos <=0){
          if(props.minutos >0){
            props.setarMinutos(minutos-1);
            props.setarSegundos(59)
          }else{
            if(!done){
              done = true;
              props.setarEstado('leitura');
              props.setarMinutos(0);
              props.setarSegundos(1);
            }
          }
        }

      },1000)

      return () => clearInterval(timer);

    })

    function resetar(){
      props.setarEstado('leitura');
      props.setarMinutos(0);
      props.setarSegundos(1);
    }

    function formatarNumero(number) {
      var finalNumber = "";
      if (number < 10) {
          finalNumber = "0" + number;
      } else {
          finalNumber = number;
      }
      return finalNumber;
    }

    var segundos = formatarNumero(props.segundos);
    var minutos = formatarNumero(props.minutos);
  

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
                <Text style={styles.TexContador}>{minutos} : </Text>
                <Text style={styles.TexContador}>{segundos}</Text>
            </View>
      <TouchableOpacity onPress={()=> resetar()} style={styles.btnIniciar}><Text style={{textAlign:'center',color:'white',fontSize:20}}>Resetar</Text></TouchableOpacity>



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