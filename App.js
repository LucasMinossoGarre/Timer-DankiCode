import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';

import { Picker } from '@react-native-picker/picker';
import {LinearGradient} from 'expo-linear-gradient';
import Contador from './Contador';


export default function App() {
  const [estado,setarEstado] = useState('leitura');
  const [segundos,setarSegundos] = useState(1);
  const [minutos,setarMinutos] = useState(0);

  const [alarmeSound,setarAlarmeSound] = useState([
    {
      id:1,
      selecionado:true,
      som:'Alarme 1',
      file:'Alarme1.mp3'
    },
    {
      id:2,
      selecionado:false,
      som:'Alarme 2',
      file:'Alarme2.mp3'
    },
    {
      id:3,
      selecionado:false,
      som:'Alarme 3',
      file:'Alarme3.mp3'
    }
  ]);

  var numeros = [];
  for(var i = 1; i<=60; i++){
    numeros.push(i);
  }

  function setarAlarme(id){
    let alarmesTemp = alarmeSound.map(function(val){
      if(id != val.id)
        {val.selecionado = false}
      else
        {val.selecionado = true}
      return val;
    })

    setarAlarmeSound(alarmesTemp);
  }
  
  if(estado == 'leitura'){
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
        }} />
      <Text style={{color:'white',fontSize:30}}>Selecione Seu tempo:</Text>
      <View style={{flexDirection:'row'}}>
        <Text style={{color:'white',paddingTop:16}}>Min:</Text>
        
        <Picker
          selectedValue={minutos}
          onValueChange={(itemValue,itemIndex) => setarMinutos(itemValue)}
          style={{ height: 50, width: 120, color:'white'}}>
            <Picker.Item label='0' value='0'/>
          {
            numeros.map(function(val){
              return(<Picker.Item label={val.toString()} value={val.toString()}/>);
            })
          }
        </Picker>

        <Text style={{color:'white',paddingTop:16}}>Seg:</Text>
        <Picker
          selectedValue={segundos}
          onValueChange={(itemValue,itemIndex) => setarSegundos(itemValue)}
          style={{ height: 50, width: 120, color:'white'}}>
          {
            numeros.map(function(val){
              return(<Picker.Item label={val.toString()} value={val.toString()}/>);
            })
          }
        </Picker>
      </View>
      <View style={{flexDirection:'row'}}>
          {
            alarmeSound.map(function(val){
              if(val.selecionado){
                return(<TouchableOpacity onPress={()=> setarAlarme(val.id)} style={styles.btnEscolherSelecionado}><Text style={{color:'white'}}>{val.som}</Text></TouchableOpacity>);
              }else{
                return(<TouchableOpacity onPress={()=> setarAlarme(val.id)} style={styles.btnEscolher}><Text style={{color:'white'}}>{val.som}</Text></TouchableOpacity>);
              };
            })
          }
      </View>
      <TouchableOpacity onPress={()=> setarEstado('iniciar')} style={styles.btnIniciar}><Text style={{textAlign:'center',color:'white',fontSize:20}}>Iniciar</Text></TouchableOpacity>
    </View>
  );
  } else if (estado == 'iniciar'){
    return(
      <Contador setarMinutos={setarMinutos} setarSegundos={setarSegundos} minutos={minutos} segundos={segundos} setarEstado={setarEstado}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgb(80,50,168)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnEscolher:{
    marginRight:10,
    padding:8,
    backgroundColor:'rgb(116,67,191)'
  },
  btnEscolherSelecionado:{
    marginRight:10,
    padding:8,
    backgroundColor:'rgba(116,67,191,0.3)',
    borderColor:'white',
    borderWidth:1
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