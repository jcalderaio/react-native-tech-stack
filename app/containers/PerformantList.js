import React, { Component } from 'react';
import {
  FlatList,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import { Text, ListItem, View } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CardSection from '../components/CardSection';

class PerformantList extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription(item) {
    if (this.props.selectedLibraryId === item.id) {
      return (
        <CardSection>
          <Text>{item.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    return (
      <FlatList
        data={this.props.data.libraries} // this was passed in as props
        keyExtractor={item => item.id}
        /*Make sure to set extra data to the state thats being updated*/
        extraData={this.props.selectedLibraryId} // this is props from redux
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => this.props.selectLibrary(item.id)}
          >
            {/*this is action from redux*/}
            <View>
              <CardSection>
                <Text>{item.title}</Text>
              </CardSection>
              {this.renderDescription(item)}
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps); // ownProps are the same props that are contained in the PerformantList component
  return {
    selectedLibraryId: state.selectedLibraryId
  };
}

export default connect(mapStateToProps, actions)(PerformantList);
