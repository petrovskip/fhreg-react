import { combineReducers } from 'redux';
import { layoutReducer } from './layoutSlice';
import { recordsReducer } from './recordsClice';
import { caseReducer } from './caseSlice';


export default combineReducers({
  layoutReducer,
  recordsReducer,
  caseReducer
});