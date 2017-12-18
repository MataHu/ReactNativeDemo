import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import FitImage from 'react-native-fit-image'

export default class DetailHeaderView extends Component {
  render () {
    const {item} = this.props
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <FitImage resizeMode="contain" source={{ uri: item.detailPic }}/>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 15}}>
                <Text style={{flex: 1, fontSize:18, marginTop: 10, marginRight: 10}}>{item.title}</Text>
                <View style={{marginTop: 7, alignItems: 'center'}}>
                    <Image style={{width: 21, height: 18}} source={require('../../img/copy.png')}/>
                    <Text style={{fontSize:12 , marginTop: 5}}>{'复制'}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 15, marginTop: 15}}>
                <Text style={{flex: 1, color: '#979797', fontSize: 12}}>{'券后价'}
                    <Text style={{color: '#EA5513', fontSize: 12,  marginBottom: 10, marginLeft: 10}}>¥</Text>
                    <Text style={{color: '#EA5513', fontSize: 20,  marginBottom: 10, marginLeft: 10}}>{item.sellPrice.slice(0, item.sellPrice.length - 3)}</Text>
                    <Text style={{color: '#EA5513', fontSize: 12,  marginBottom: 10, marginLeft: 10}}>{item.sellPrice.slice(item.sellPrice.length - 3, item.sellPrice.length)}</Text>
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'white', fontSize: 12,alignItems: 'center', textAlign: 'center', padding: 4, backgroundColor: '#EA5513'}}>{item.tag}</Text>
                    <Text style={{color: '#EA5513', fontSize: 12,alignItems: 'center', textAlign: 'center', padding: 4, marginLeft: 10, borderColor: '#EA5513', borderWidth: 1}}>{item.coupon + '元券'}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 15, marginTop: 15}}>
                <Text style={{flex: 1, color: '#979797', fontSize: 12}}>{'原价：' + item.price}</Text>
                <Text style={{color: '#979797', fontSize: 12}}>{'已售：' + item.biz30day}</Text>
            </View>
            <Text style={{color: '#979797', fontSize: 12, marginTop: 30, marginLeft: 15, marginRight: 15}}>{'购买方式：１.先领取优惠券２.查看券后价格３.下单'}</Text>
            <View style={{flexDirection: 'row', paddingLeft: 15, paddingRight: 15, marginTop: 15}}>
                <Text style={{color: '#979797', fontSize: 12}}>{'推荐理由：'}</Text>
                <Text style={{flex: 1, color: '#979797', fontSize: 12}} numberOfLines={0}>{item.desc}</Text>
            </View>
            <Text style={{fontSize: 14, alignItems: 'center', textAlign: 'center', marginTop: 20, marginLeft: 15, marginRight: 15, marginBottom: 20}}>{'继续拖动，查看图文详情'}</Text>
        </View>
      )
  }
}
