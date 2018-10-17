import React, { Component, Alert } from 'react';
import { Button, Container, Form, Item, Text, Input } from 'native-base';
import { loginAction } from './auth-screen-actions';

export class AuthComponent extends Component {
  static navigationOptions = {
    title: 'Authorization',
  };

  state = {
    login: '',
    password: '',
  };

  onChange = (type: string) => value => {
    switch (type) {
      case 'login':
        this.setState(state => ({
          ...state,
          login: value,
        }));
        break;
      case 'password': {
        this.setState(state => ({
          ...state,
          password: value,
        }));
        break;
      }
      default:
        return;
    }
  };

  loginHandler = () => {
    const { login, password } = this.state;
    loginAction({ login, password });
    // NOTE 17-Oct-18 [NZ]: skipped login
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <Container
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <Form
          style={{
            flex: 1,
          }}
        >
          <Item>
            <Input onChangeText={this.onChange('login')} placeholder="Email" />
          </Item>
          <Item last>
            <Input
              onChangeText={this.onChange('password')}
              placeholder="Password"
            />
          </Item>
        </Form>
        <Button onPress={this.loginHandler} block info>
          <Text>Login</Text>
        </Button>
        <Button block>
          <Text>Register</Text>
        </Button>
      </Container>
    );
  }
}
