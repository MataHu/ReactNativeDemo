import React, { Component } from 'react'
import {Image, TouchableOpacity } from 'react-native'
import FitImage from 'react-native-fit-image'

export default class NavigationImageIcon extends Component {
  render () {
    const {navigation, source} = this.props
    console.log('source',navigation, this.props.source)
    return (
      <TouchableOpacity onPress={() => this.props.onPress()}>
        <Image style={{margin: 10, padding: 10, width: 25, height: 25}}  source={require('../img/back.png')} />
      </TouchableOpacity>
    )
  }
}
