import React, { Component } from 'react';
import { Card } from 'native-base';
import { connect } from 'react-redux';
import PerformantList from './PerformantList';

class LibraryList extends Component {
  // When using arrow functions, => means return, so put a () around what you're returning. When using regular functions, use a return statement.

  render() {
    // you're calling the function here, so use (). If only passing to "onClick, then don't use ()"
    return (
      <Card>
        <PerformantList data={this.props} />
      </Card>
    );
  }
}

function mapStateToProps({ libraries }) {
  return {
    libraries
  };
}

// When connect is called, ite returns another function. We then immediately call that returned function with LibraryList as it's argument.
export default connect(mapStateToProps)(LibraryList);

// the only way to reach into Redux state to access data
