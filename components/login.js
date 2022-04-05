import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button, Avatar} from 'react-native-elements';
import '../css/login.css'

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{alignItems:'center',paddingTop:30,paddingBottom:30}}>
          <Avatar
            icon={{name: 'user'}}
            size="xlarge"
            rounded
            title="LM"
            onPress={() => console.log("Marlin")}
            activeOpacity={0.7}
            source={{
            uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
            className="alinhamento"
        />
        <Input
        containerStyle={{width:300}}
        placeholder='Login'
        ></Input>
        <Input
        containerStyle={{width:300}}
        placeholder='Senha'
        />

            <View>
            <Button style={{width:100,paddingBottom:10}}
                title="Login"
                type='outline'
            />
        
            <Button style={{width:100}}
                title="Cadastro"
                type='outline'
            />
            </View>
        
      </View>
    );
  }
}

export default login;
