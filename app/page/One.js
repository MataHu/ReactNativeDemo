import React, {Component} from 'react'
import { View, Text, TouchableOpacity, FlatList, RefreshControl, Image } from 'react-native'
import {postGoogs} from '../service/request'
import OneItem from '../components/One/OneItem'

export default class One  extends Component {
  constructor(props) {
    super(props);
    this.state = {
        goodsList: [],
        currIndex: 0,
        isLastPage: false,
        refreshing: true
    };
  }

  componentWillMount() {
      this.getGoodsList(0);
  }

  async getGoodsList(start) {
    console.log("One start isLastPage:" + start + this.state.isLastPage)
    
    if (this.state.isLastPage && start !== 0)
        return;
    // start === 0 && this.setState({refreshing: true, isLastPage: false});   
    try {
        let result = await postGoogs({start: start, limit: 40, isSeckill: false})
        let goodsList = this.state.goodsList
        if (start === 0) {
          goodsList = []
        }
        let data = result.list        
        goodsList = goodsList.concat(data);
        this.setState({
          goodsList: goodsList,
          currIndex: start,
          isLastPage: (data < 40),
          refreshing: false
        })
        console.log("try")                    
    } catch (e) {
      console.log("catch")      
        toast(e)
    } finally {
      console.log("finally")            
      start === 0 && this.setState({refreshing: false});
    }
}

  render() {
    var listData = this.state.goodsList
    console.log('render', listData)
    if (listData.length > 0) {
      return (
        <FlatList
        style={{flex: 1}}
        data={listData}
        renderItem={(e) => this.getItemCompt(e)}
        ListFooterComponent={(e) => this.renderLoadMoreFooter(e)}      
        onEndReachedThreshold={0.1}
        onEndReached={this.onEndReached}
        removeClippedSubviews={false}
        backgroundColor={'#f2f2f2'}
        refreshControl={
          <RefreshControl
            onRefresh={this.onRefresh}
            color="#ccc"
            refreshing={this.state.refreshing}
            colors={['#ff0000', '#ff0000', '#ff0000']}
          />
        }/>)
    }else {
      if (!this.state.refreshing) {
        return <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity
          onPress={() => this.getGoodsList(0)}
          style={{
            padding:10,
            borderRadius:5,
            backgroundColor:'#EA5513',
            marginTop:20
          }}>
          <Text style={{color:'#fff'}}>{'重新加载'}</Text>
          </TouchableOpacity>
        </View>
      } else {
        return <View/>
      }
    }
  }

  onRefresh = () => {
    this.getGoodsList(0)    
  }

  getItemCompt = ({item, index}) => {
    return <OneItem item={item} navigation={this.props.navigation}/>
  }

  onEndReached = () => {
    console.log('onEndReached')
    if (!this.state.refreshing && !this.state.isLastPage) {
        this.getGoodsList(this.state.currIndex + 40)            
    }
  }

  renderLoadMoreFooter = () => {
    var listData = this.state.goodsList    
    if (listData && listData.length > 0) {
      return <Text style={{flex: 1, height: 40, alignSelf: 'center', textAlign: 'center', color: '#313131', fontSize: 15, lineHeight: 40}} numberOfLines={1}>{this.state.isLastPage ? '我是有底线的' : '正在加载...'}</Text>
    }else {
      return <View/>
    }
  }
}