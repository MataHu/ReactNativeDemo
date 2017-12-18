import React, {Component} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class TwoDetail  extends Component {
  render() {
    return <View style={{
        flex:1,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Tab Two Screen TwoDetail' }</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'#432456',
            marginTop:20
          }}>
          <Text style={{color:'#fff'}}>{'Go to next screen this tab'}</Text>
        </TouchableOpacity>
      </View>
  }
}