import React, { Component } from 'react';
// react-redux is glue between redux and react
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './app/reducers';

// Screens
import Main from './app/screens/Main';

export default class App extends Component {
  render() {
    return (
      // The store holds our state, while the Provider is communication glue with React
      // Provider feeds the store to React
      <Provider store={createStore(reducers)}>
        {/*Provider can ONLY HAVE one child!!!*/}
        <Main />
      </Provider>
    );
  }
}
