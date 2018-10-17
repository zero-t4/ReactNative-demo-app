import React, { Component, Alert } from 'react';
import { Button, Container, Form, Item, Icon, Text, Input } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';
import { registerAction } from './register-screen-actions';
export class RegisterComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Registration',
      headerLeft: (
        <Icon
          onPress={() => navigation.goBack()}
          type="FontAwesome"
          name="chevron-left"
        />
      ),
    };
  };

  state = {
    email: '',
    first_name: '',
    password: '',
    surname: '',
  };

  onChange = (type: string) => value => {
    switch (type) {
      case 'email':
      case 'first_name':
      case 'password':
      case 'surname':
        this.setState(state => ({
          ...state,
          [type]: value,
        }));
        break;
      default:
        return;
    }
  };

  registerHandler = () => {
    const { email, first_name, password, surname } = this.state;
    registerAction({ email, first_name, password, surname })
      .then()
      .catch();
    // NOTE 17-Oct-18 [NZ]: skipped registration
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Main' })],
    });

    this.props.navigation.dispatch(resetAction);
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
            <Input onChangeText={this.onChange('email')} placeholder="Email" />
          </Item>
          <Item>
            <Input
              onChangeText={this.onChange('first_name')}
              placeholder="First Name"
            />
          </Item>
          <Item>
            <Input
              onChangeText={this.onChange('password')}
              placeholder="Password"
            />
          </Item>
          <Item last>
            <Input
              onChangeText={this.onChange('surname')}
              placeholder="Surname"
            />
          </Item>
        </Form>
        <Button onPress={this.registerHandler} block>
          <Text>Complete Registration</Text>
        </Button>
      </Container>
    );
  }
}
