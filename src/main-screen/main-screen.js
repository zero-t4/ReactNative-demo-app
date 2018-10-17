import React from 'react';
import { Button, Text, View } from 'react-native';

export class MainComponent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Exit"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
