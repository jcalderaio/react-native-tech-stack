import React, { Component } from 'react';
import {
  Container,
  Content,
  Text,
  Header,
  Body,
  Title,
  Left,
  Right,
  View
} from 'native-base';
import LibraryList from '../containers/LibraryList';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Tech Stack</Title>
          </Body>
        </Header>
        <Content>
          <LibraryList />
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
