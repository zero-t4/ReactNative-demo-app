import React from 'react';
import {
  Input,
  Item,
  Label,
  Content,
  Form,
  Button,
  Icon,
  Text,
} from 'native-base';

export class MainComponent extends React.Component {
  state = {};

  static navigationOptions = {
    title: 'MainComponent',
  };

  createAsset = () => {};

  createProject = () => {
    // TODO 17-Oct-18 [NZ]: implement creating project
  };

  onChange = type => value => {
    switch (type) {
      case 'address_1':
      case 'post_code':
      case 'city':
        return this.setState(state => ({ ...state, [type]: value }));
      default:
        return;
    }
  };

  render() {
    return (
      <Content>
        <Form style={{ paddingTop: 5, marginBottom: 30 }}>
          <Item floatingLabel>
            <Label>Address 1</Label>
            <Input onChangeText={this.onChange('address_1')} />
          </Item>
          <Item floatingLabel>
            <Label>Post Code</Label>
            <Input onChangeText={this.onChange('post_code')} />
          </Item>
          <Item floatingLabel last>
            <Label>City</Label>
            <Input onChangeText={this.onChange('city')} />
          </Item>
          <Button  style={{ marginTop: 25}} block warning onPress={this.createAsset}>
            <Icon name="md-battery-charging" />
            <Text>Create asset</Text>
          </Button>
        </Form>
        <Item>
          <Button success onPress={this.createProject}>
            <Icon name="md-battery-charging" />
            <Text>Create a project for an asset</Text>
          </Button>
        </Item>
        <Item>
          <Button primary onPress={() => alert('Not implemented yet :(')}>
            <Icon name="md-beer" />
            <Text>Fetch list of your assets</Text>
          </Button>
        </Item>
        <Item>
          <Button info onPress={() => alert('Not implemented yet :(')}>
            <Icon name="ios-boat-outline" />
            <Text>Fetch list of projects</Text>
          </Button>
        </Item>
      </Content>
    );
  }
}
