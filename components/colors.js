import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class colors extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{
            flexDirection:"column",flex:1
          }}>
            <View style={{flex:1, backgroundColor:"yellow"}}></View>
            <View style={{flex:1, backgroundColor:"blue"}}></View>
      
      
            <View style={{flex:1,flexDirection:"row" }}>
              <View style={{flex:1,backgroundColor:"red" }}/>
              <View style={{flex:1,backgroundColor:"green"}}/>
            </View>
      
      
            <View style={{flex:1,flexDirection:"row" }}>
              <View style={{flex:1,backgroundColor:"pink"}}></View>
              <View style={{flex:1,backgroundColor:"black"}}></View>
            </View>
          </View>
    );
  }
}
