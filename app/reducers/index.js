import { combineReducers } from 'redux';
import LibraryReducer from './reducer_library';
import SelectionReducer from './reducer_selection';

// The reducers will make this state available in react
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
