import React, { Component } from 'react'
import {Platform, Dimensions } from 'react-native'
import FitImage from 'react-native-fit-image'
import NavigationImageIcon from '../widgets/NavigationImageIcon'

export default class BaseComponent extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: navigation.state.params.item.title,
        headerLeft: <NavigationImageIcon navigation={navigation} onPress={() => navigation.goBack()}/>,
    })

    isIOS () {
        return Platform.OS === 'ios'
    }
    
    isiPhone5 () {
        return Platform.OS === 'ios' && Dimensions.get('window').width === 320
    }
    
    isiPhone6 () {
        return Platform.OS === 'ios' && Dimensions.get('window').width === 375
    }
    
    isiPhonePlus () {
        return Platform.OS === 'ios' && Dimensions.get('window').width === 414
    }
    
    isiPhoneX () {
        return Platform.OS === 'ios' && Dimensions.get('window').height === 812
    }
    
    isAndroid () {
        return Platform.OS === 'android'
    }

  
}
