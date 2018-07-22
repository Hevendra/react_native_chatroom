import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import {Card, CardSection, Button} from './common';

export default class LoginForm extends Component {
  state = {text: ''};
  render () {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState ({text})}
            style={{height: 20, width: 100}}
          />

        </CardSection>
        <CardSection>
          <TextInput
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Email"
            style={{height: 20, width: 100}}
            placeholderTextColor="#000000"
          />
        </CardSection>
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}
