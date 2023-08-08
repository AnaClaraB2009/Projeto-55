import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import {Audio} from "expo-av"


class SoundButton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsyncm (
   { uri: "http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3" },
   {shouldPlay : true}
   );
   }

  render() {
    return (
      <TouchableOpacity style = {{ 
        backgroundColor : "white",
        marginLeft : 130,
        borderWidth : 1,
        borderColor : "red",
        alignItens : "center",
        justifyContent :  'center' ,
        width : 200,
        height: 200,
        borderRadius : 180,
       }} onPress={this.playSound}> <Text
       style = {{ alignItens : "center" }}
       > 
       Clique aqui 
              </Text> </TouchableOpacity>
      //<Button title="Botão de Som" color="red" onPress={this.playSound} />
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}


