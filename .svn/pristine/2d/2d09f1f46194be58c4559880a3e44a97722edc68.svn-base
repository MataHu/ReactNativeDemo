import React, {Component} from 'react'
import { View, Text, FlatList } from 'react-native'
import {getPic} from '../service/request'
import DetailHeaderView from '../components/One/DetailHeaderView'
import FitImage from 'react-native-fit-image'
import NavigationImageIcon from '../widgets/NavigationImageIcon'
import BaseComponent from '../widgets/BaseComponent'

export default class OneDetail  extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
        picList: []
    };
  }

  componentWillMount() {
      this.getPicList(this.props.navigation.state.params.item.thirdId);
  }

  async getPicList(thirdId) {
    console.log(thirdId)
    try {
        let result = await getPic({thirdId})
        let data = result.list        
        this.setState({
          picList: data
        })
        console.log("try")                    
    } catch (e) {
      console.log("catch")
        toast(e)
    } finally {
      console.log("finally")            
    }
  }

  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.state.params.item.title,
    headerLeft: <NavigationImageIcon navigation={navigation} onPress={() => navigation.goBack()}/>,
  })

  render() {
    var listData = this.state.picList
    console.log('render', listData)
    return(
      <FlatList
        style={{flex: 1}}
        data={listData}
        renderItem={(e) => this.getItemCompt(e)}
        ListHeaderComponent={(e) => this.renderHeader(e)}      
        onEndReached={this.onEndReached}
        removeClippedSubviews={false}
        backgroundColor={'#f2f2f2'}
        />
    )
  }

  getItemCompt = ({item, index}) => {
    return <FitImage resizeMode="contain" source={{ uri: item }}/>
  }

  renderHeader = () => {
    return <DetailHeaderView item={this.props.navigation.state.params.item}/>
  }
}