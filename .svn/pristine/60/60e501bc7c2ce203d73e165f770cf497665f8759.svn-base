import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'


export default class OneItem extends Component {
  render () {
    const {item} = this.props
    return (
        <TouchableOpacity style={{flex: 1}} activeOpacity={0.8} onPress={() => this.props.navigation.navigate('OneDetail', {item, title: item.title})}>
        <View style={{flex: 1, backgroundColor: '#fff', flexDirection: 'row'}}>
          <Image style={{height: 140, width: 140}} source={{uri: item.pic}}/>
          <View style={{flex: 1, height: 140}}>
            <Text style={{fontSize:15, marginRight: 10, marginLeft: 10, marginTop: 10}} numberOfLines={2}>{item.title}</Text>
            <View style={{flexDirection: 'column-reverse', marginBottom: 0, flex: 1}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{color: '#979797', fontSize: 12,  marginBottom: 10, marginLeft: 10}}>{'券后价'}
                    <Text style={{color: '#EA5513', fontSize: 12,  marginBottom: 10, marginLeft: 10}}>¥</Text>
                    <Text style={{color: '#EA5513', fontSize: 18,  marginBottom: 10, marginLeft: 10}}>{item.sellPrice.slice(0, item.sellPrice.length - 3)}</Text>
                    <Text style={{color: '#EA5513', fontSize: 12,  marginBottom: 10, marginLeft: 10}}>{item.sellPrice.slice(item.sellPrice.length - 3, item.sellPrice.length)}</Text>
                  </Text>
                  <View style={{width: 70, height: 28, marginBottom: 8, marginRight: 15, backgroundColor: '#EA5513', borderRadius: 6, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 12, textAlign: 'center', backgroundColor: 'transparent'}}>{'立减' + item.coupon + '元'}</Text>
                  </View>
              </View>
              <View style={{width: 40, height: 16, marginBottom: 10, marginLeft: 10, borderWidth: 1, borderRadius: 4, borderColor: '#979797', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: '#979797', fontSize: 12, textAlign: 'center', backgroundColor: 'transparent'}}>{item.tag}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 12, color: '#979797', marginBottom: 10, marginLeft: 10}}>{'原价：'+ item.price}</Text>
                <Text style={{fontSize: 12, color: '#979797', marginBottom: 10, marginLeft: 10}}>{'已售：'+ item.biz30day}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{height: 5}}/>
      </TouchableOpacity>
      )
  }
}
