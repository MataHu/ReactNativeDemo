import React, {Component} from 'react'
import { View, Image } from 'react-native'
import {StackNavigator, TabBarBottom, TabNavigator, TabBarTop} from 'react-navigation'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'
import CodePush from 'react-native-code-push'
import Toast, {DURATION} from 'react-native-easy-toast'

import One from './page/One'
import Two from './page/Two'
import {OneDetail, TwoDetail} from './routes/route'

import Flower from './Flower';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDownloadingModal: true
    };
  }

  componentDidMount() {
    console.log('componentDidMount')
    CodePush.DEFAULT_UPDATE_DIALOG.optionalIgnoreButtonLabel = '忽略'
    CodePush.DEFAULT_UPDATE_DIALOG.optionalInstallButtonLabel = '更新'
    CodePush.DEFAULT_UPDATE_DIALOG.title = '更新提示'
    CodePush.DEFAULT_UPDATE_DIALOG.optionalUpdateMessage = '意不意外，惊不惊喜，有新版本啦'

    CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE },
      (status) => {
        switch (status) {
          case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
            console.log('CHECKING_FOR_UPDATE')
            break;
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            this.setState({showDownloadingModal: true});
            console.log('DOWNLOADING_PACKAGE')
            this.refs.toast.show('正在更新...', DURATION.FOREVER)
            break;
          case CodePush.SyncStatus.INSTALLING_UPDATE:
            this.setState({showInstalling: true});
            console.log('INSTALLING_UPDATE')
            break;
          case CodePush.SyncStatus.UPDATE_INSTALLED:
            this.setState({showDownloadingModal: false});
            console.log('UPDATE_INSTALLED')
            this.refs.toast.close()
            break;
          case CodePush.SyncStatus.UNKNOWN_ERROR:
            this.refs.toast.close()
            this.refs.toast.show('更新失败，请稍后再试', DURATION.LENGTH_SHORT)
            break;
        }
      },
      ({ receivedBytes, totalBytes, }) => {
          this.setState({downloadProgress: receivedBytes / totalBytes * 100});
      }
    );
  }

  render() {
    return <View style={{flex: 1}}>
      <Toast
          ref="toast"
      />
      <Navigator/>
      {/* <Flower/> */}
    </View>
  }
}

// 设置底部tabBar
const Tab = TabNavigator(
  {
    TabOne: {
      screen:  One,
      navigationOptions: () => ({
        tabBarLabel: '首页',
        title: '首页',
        tabBarIcon: ({ tintColor, focused }) => (
          focused ? <Image style={{width: 20, height: 20}} source={require('./img/home_selected.png')} />
          : <Image style={{width: 20, height: 20}} source={require('./img/home.png')} />
        )
      })
    },
    TabTwo: {
      screen: Two,
      navigationOptions: () => ({
        tabBarLabel: '秒杀',
        title: '秒杀',
        tabBarIcon: ({ tintColor, focused }) => (
          focused ? <Image style={{ width: 20, height: 20}} source={require('./img/secKill_selected.png')} />
          : <Image style={{width: 20, height: 20}} source={require('./img/secKill.png')} />)
      })
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    initialRouteName: 'TabOne',
    lazy: true,
    tabBarOptions: {
      showIcon: true,// android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: {height: 0},// android 中TabBar下面会显示一条线，高度设为 0
      activeTintColor: '#EA5513',
      inactiveTintColor: '#9E9EB5',
      style: {
        backgroundColor: 'white',
        height:49
      }
    }
  }
)

// 设置导航栏
const Navigator = StackNavigator(
  {
    Tab: { screen: Tab},
    OneDetail: { screen: OneDetail},
    TwoDetail: { screen: TwoDetail}
  },
  //初始导航栏状态
  {
    mode: 'card',
    headerMode: 'screen',
    navigationOptions: {
      headerBackTitle: null,
      headerStyle: {shadowOpacity: 0, elevation: 0, backgroundColor: 'white', height: 48},      
      showIcon: true
    },
    transitionConfig:(()=>({
      //因为ios 的导航动画默认是从左到右，所以，这里配置一下动画，使用react-navigation已经实现的从左到右的动画，
      //适配Android，不过，需要导入动画 
      screenInterpolator:CardStackStyleInterpolator.forHorizontal,
  }))
  }
)

export default Navigation;