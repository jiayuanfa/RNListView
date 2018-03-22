/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

export default class JYFTabBar extends Component<Props> {

  constructor(pros){
    super(pros);
    this.state={
      // 默认被选中的Item
      selectedTabBarItem:'home'
    }
  }

  render() {

// 顶部 + Tabbar
    return (
        <View style={styles.container}>

          <View style={{marginTop:20}}>
            <Text>TabBat练习</Text>
          </View>

          <TabBarIOS
            barTintColor='black'
            style={{width:width}}
            tintColor='purple'
          >

            <TabBarIOS.Item
                systemIcon="contacts"
                badge="3"
                selected={this.state.selectedTabBarItem == 'home'}
                // 选中方法修改状态机 状态机修改之后自动刷新UI
                onPress = {()=>{this.setState({selectedTabBarItem:'home'})}}
            >
              <View style={[styles.commonViewStyle,{backgroundColor:'red'}]}>
                  <Text>首页</Text>
              </View>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                systemIcon="bookmarks"
                selected={this.state.selectedTabBarItem == 'second'}
                onPress = {()=>{this.setState({selectedTabBarItem:'second'})}}
            >
              <View style={[styles.commonViewStyle,{backgroundColor:'blue'}]}>
                  <Text>书签</Text>
              </View>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                systemIcon="downloads"
                selected={this.state.selectedTabBarItem == 'third'}
                onPress = {()=>{this.setState({selectedTabBarItem:'third'})}}
            >
              <View style={[styles.commonViewStyle,{backgroundColor:'green'}]}>
                  <Text>下载</Text>
              </View>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                systemIcon="search"
                selected={this.state.selectedTabBarItem == 'four'}
                onPress = {()=>{this.setState({selectedTabBarItem:'four'})}}
            >  
              <View style={[styles.commonViewStyle,{backgroundColor:'yellow'}]}>
                  <Text>搜索</Text>
              </View>
            </TabBarIOS.Item>
          </TabBarIOS>

        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  commonViewStyle:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

});
