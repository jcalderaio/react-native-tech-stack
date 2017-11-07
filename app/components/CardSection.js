import React from 'react';
import { View } from 'react-native';

const CardSection = props => (
  <View style={styles.containerStyle}>{props.children}</View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 15,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection; //  Must export like this when mass importing to index.js
