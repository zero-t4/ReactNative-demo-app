import React, { Component } from 'react';
import { Button, Container, Form, Item, Text, Input } from 'native-base';
import { loginAction } from './auth-screen-actions';
import { NavigationActions, StackActions } from 'react-navigation';

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
      case 'password':
        this.setState(state => ({
          ...state,
          [type]: value,
        }));
        break;
      default:
        return;
    }
  };

  loginHandler = () => {
    const { login, password } = this.state;
    loginAction({ login, password });
    // NOTE 17-Oct-18 [NZ]: skipped login
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Main' })],
    });

    this.props.navigation.dispatch(resetAction);
  };

  registerHandler = () => {
    this.props.navigation.navigate('Register');
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
        <Button onPress={this.registerHandler} block>
          <Text>Register</Text>
        </Button>
      </Container>
    );
  }
}
