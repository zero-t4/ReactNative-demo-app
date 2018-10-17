import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Auth } from './auth-screen';
import { Main } from './main-screen';
import { Registration } from './register-screen';

const RootStack = StackNavigator(
  {
    Auth: {
      screen: Auth,
    },
    Main: {
      screen: Main,
    },
    Register: {
      screen: Registration,
    },
  },
  {
    initialRouteName: 'Auth',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
