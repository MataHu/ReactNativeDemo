import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class Flower extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text style={{fontSize: 20}}>{'这是一个新的app'}</Text>
      </View>
    )
  }
}