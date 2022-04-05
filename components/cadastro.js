import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button, Avatar} from 'react-native-elements';
import '../css/login.css'
class cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{alignItems:'center'}}>
      <h1 className=''>Cadastro</h1>

      <Input
        containerStyle={{width:300}}
        placeholder='Login'
        ></Input>
        <Input
        containerStyle={{width:300}}
        placeholder='Email'
        ></Input>
        
        <Input
        containerStyle={{width:300}}
        placeholder='Senha'
        />

<Button style={{width:100,paddingBottom:10}}
                title="Cadastrar"
                type='outline'
            />
      </View>
    );
  }
}

export default cadastro;
